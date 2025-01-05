import { promises as fs } from 'fs'
import { createWriteStream } from 'fs'
import path from 'path'
import archiver from 'archiver'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { auth } from '@/http/middlewares/auth'
import z from 'zod'

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
          // Pasta base
          const baseDir = path.resolve(__dirname, '../../../../src/templates')
          const originalTemplatePath = path.resolve(baseDir, nameTemplate) // Diretório do template original
          const tempDir = path.join(baseDir, 'temp') // Diretório temporário

          // Cria o nome único da pasta
          const newProjectPath = await createUniqueFolderName(
            tempDir,
            nameTemplate
          )

          // Copia a estrutura do template original para a pasta temporária
          await copyDirectory(originalTemplatePath, newProjectPath)

          // Caminho do arquivo a ser atualizado
          const originalFilePath = path.join(
            newProjectPath,
            'utils',
            'constants.js'
          )

          // Lê o conteúdo do arquivo original
          const originalContent = await fs.readFile(originalFilePath, 'utf8')

          // Substitui "placeholder" pelo horário atual
          // const currentTime = new Date().toLocaleString('pt-BR')
          const newContent = originalContent.replace(
            '{{seu-email}}',
            `${email}`
          )
          const newContent2 = newContent.replace('{{seu-github}}', `${github}`)
          const newContent3 = newContent2.replace(
            '{{seu-linkedin}}',
            `${linkedin}`
          )
          const newContent4 = newContent3.replace(
            '{{seu-api-githubRepos}}',
            `${apiGithub}`
          )
          const newContent5 = newContent4.replace('{{seu-nome}}', `${name}`)

          // Sobrescreve o arquivo atualizado
          await fs.writeFile(originalFilePath, newContent5)

          // Caminho para o arquivo zip
          const zipFileName = `${newProjectPath.split(path.sep).pop()}.zip`
          const zipFilePath = path.join(tempDir, zipFileName)

          // Cria o arquivo zip
          const output = createWriteStream(zipFilePath)
          const archive = archiver('zip', {
            zlib: { level: 9 }, // Maior nível de compressão
          })

          // Pipe archive data to the file
          archive.pipe(output)

          // Adiciona todo o diretório do projeto ao arquivo zip
          archive.directory(newProjectPath, path.basename(newProjectPath))

          // Finaliza o arquivo zip
          await archive.finalize()

          // Espera o arquivo ser completamente escrito
          await new Promise((resolve, reject) => {
            output.on('close', resolve)
            output.on('error', reject)
          })

          // Lê o arquivo zip
          const zipFile = await fs.readFile(zipFilePath)

          // Configura os headers para download
          reply.header(
            'Content-Disposition',
            `attachment; filename=${zipFileName}`
          )
          reply.type('application/zip')

          // Envia o arquivo zip
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
