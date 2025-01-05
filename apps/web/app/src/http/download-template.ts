import { api } from './api-client'

interface GetTemplateZipRequest {
  name: string
  email: string
  github: string
  linkedin: string
  apiGithub: string
  nameTemplate: string
}

export async function getTemplateZip({
  name,
  email,
  github,
  linkedin,
  apiGithub,
  nameTemplate,
}: GetTemplateZipRequest) {
  try {
    const response = await api
      .post(`process-file`, {
        body: JSON.stringify({
          name,
          nameTemplate,
          email,
          github,
          linkedin,
          apiGithub,
        }),

        headers: {
          'Content-Type': 'application/json',
        },
        // Configuração específica para ky
        timeout: 30000, // 30 segundos para downloads maiores
      })
      .blob() // ky tem um método .blob() nativo

    // Criar URL do blob
    const url = window.URL.createObjectURL(response)

    // Criar link temporário para download
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `portfolio-template.zip`)

    // Trigger download
    document.body.appendChild(link)
    link.click()

    // Cleanup
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)

    return true
  } catch (error) {
    console.error('Erro ao fazer download:', error)
    throw error
  }
}
