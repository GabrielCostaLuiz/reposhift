import { api } from './api-client'

export interface GetTemplateFavoriteResponse {
  templates: {
    id: string
    name: string
    slug: string
    reference: string
    imgTemplate: string
    urlGithub: string
    likes: number
    urlDemo: string
    types: string[]
    createdAt: string
    updatedAt: string
  }[]
}

export async function getTemplateFavorite() {
  const result = await api
    .get('templates/favorite')
    .json<GetTemplateFavoriteResponse>()

  return result
}
