import { promises as fs } from 'fs'
import { createWriteStream } from 'fs'
import path from 'path'
import archiver from 'archiver'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { auth } from '@/http/middlewares/auth'
import z from 'zod'

// Função para garantir que o diretório existe
async function ensureDirectoryExists(dir: string) {
  try {
    await fs.access(dir)
  } catch {
    await fs.mkdir(dir, { recursive: true })
  }
}

const createUniqueFolderName = async (baseDir: string, name: string) => {
  const timestamp = new Date()
  const day = String(timestamp.getDate()).padStart(2, '0')
  const month = String(timestamp.getMonth() + 1).padStart(2, '0')
  const year = timestamp.getFullYear()
  const formattedDate = `${day}-${month}-${year}`

  let newFolderName = `template-${name}-${formattedDate}`
  let folderPath = path.join(baseDir, newFolderName)

  let counter = 1
  while (
    await fs
      .access(folderPath)
      .then(() => true)
      .catch(() => false)
  ) {
    newFolderName = `template-${name}-${formattedDate}-${counter}`
    folderPath = path.join(baseDir, newFolderName)
    counter++
  }

  return folderPath
}

export async function downloadTemplate(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(auth)
    .post(
      '/process-file',
      {
        schema: {
          tags: ['Templates'],
          summary: 'Download template',
          security: [{ bearerAuth: [] }],
          body: z.object({
            name: z.string(),
            email: z.string(),
            github: z.string(),
            linkedin: z.string(),
            apiGithub: z.string(),
            nameTemplate: z.string(),
          }),
        },
      },
      async (request, reply) => {
        const { name, email, github, linkedin, apiGithub, nameTemplate } =
          request.body

        try {
          // Usando process.cwd() para obter o caminho base do projeto
          const baseDir = path.join(process.cwd(), 'src', 'templates')

          // Garantir que o diretório base existe
          await ensureDirectoryExists(baseDir)

          const originalTemplatePath = path.join(baseDir, nameTemplate)
          const tempDir = path.join(baseDir, 'temp')

          // Garantir que o diretório temp existe
          await ensureDirectoryExists(tempDir)

          // Verificar se o template original existe
          try {
            await fs.access(originalTemplatePath)
          } catch (error) {
            throw new Error(`Template ${nameTemplate} não encontrado`)
          }

          // Cria o nome único da pasta
          const newProjectPath = await createUniqueFolderName(
            tempDir,
            nameTemplate
          )

          // Copia a estrutura do template original para a pasta temporária
          await copyDirectory(originalTemplatePath, newProjectPath)

          const originalFilePath = path.join(
            newProjectPath,
            'utils',
            'constants.js'
          )

          // Verificar se o arquivo existe antes de tentar ler
          try {
            await fs.access(originalFilePath)
          } catch (error) {
            throw new Error('Arquivo constants.js não encontrado no template')
          }

          // Lê o conteúdo do arquivo original
          const originalContent = await fs.readFile(originalFilePath, 'utf8')

          const newContent = originalContent
            .replace('{{seu-email}}', email)
            .replace('{{seu-github}}', github)
            .replace('{{seu-linkedin}}', linkedin)
            .replace('{{seu-api-githubRepos}}', apiGithub)
            .replace('{{seu-nome}}', name)

          // Sobrescreve o arquivo atualizado
          await fs.writeFile(originalFilePath, newContent)

          // Caminho para o arquivo zip
          const zipFileName = `${path.basename(newProjectPath)}.zip`
          const zipFilePath = path.join(tempDir, zipFileName)

          // Cria o arquivo zip
          const output = createWriteStream(zipFilePath)
          const archive = archiver('zip', {
            zlib: { level: 9 },
          })

          archive.pipe(output)
          archive.directory(newProjectPath, path.basename(newProjectPath))

          await archive.finalize()

          // Espera o arquivo ser completamente escrito
          await new Promise((resolve, reject) => {
            output.on('close', resolve)
            output.on('error', reject)
          })

          const zipFile = await fs.readFile(zipFilePath)

          reply.header(
            'Content-Disposition',
            `attachment; filename=${zipFileName}`
          )
          reply.type('application/zip')

          reply.send(zipFile)

          // Limpa os arquivos temporários após o envio
          await cleanup(newProjectPath, zipFilePath)

          return reply
        } catch (error: any) {
          app.log.error(error)
          reply.status(500).send({
            error: 'Erro ao processar arquivo',
            details: error.message,
          })
        }
      }
    )
}

// Função para copiar recursivamente um diretório
async function copyDirectory(source: string, destination: string) {
  const entries = await fs.readdir(source, { withFileTypes: true })
  await fs.mkdir(destination, { recursive: true })

  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name)
    const destinationPath = path.join(destination, entry.name)

    if (entry.isDirectory()) {
      await copyDirectory(sourcePath, destinationPath) // Copia diretórios recursivamente
    } else {
      await fs.copyFile(sourcePath, destinationPath) // Copia arquivos
    }
  }
}

// Função para limpar arquivos temporários
async function cleanup(newProjectPath: string, zipFilePath: string) {
  try {
    // Remove o arquivo zip
    await fs.unlink(zipFilePath)
    // Remove recursivamente a pasta do projeto
    await fs.rm(newProjectPath, { recursive: true })
  } catch (cleanupError) {
    console.error('Erro ao limpar arquivos temporários:', cleanupError)
  }
}
