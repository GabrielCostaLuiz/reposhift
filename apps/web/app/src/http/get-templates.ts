import { api } from './api-client'

export interface GetTemplateResponse {
  templates: {
    id: string
    name: string
    slug: string
    reference: string
    imgTemplate: string
    urlGithub: string
    likes: number
    urlDemo: string
    description: string
    types: string[]
    techs: string[]
    createdAt: string
    updatedAt: string
  }[]
}

export async function getTemplates() {
  const result = await api.get('templates').json<GetTemplateResponse>()

  return result
}
