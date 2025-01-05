import { api } from './api-client'

export interface GetTemplateRequest {
  templateSlug: string
}

export interface GetTemplateResponse {
  template: {
    id: string
    name: string
    slug: string
    reference: string
    imgTemplate: string
    urlGithub: string
    likes: number
    urlDemo: string
    types: string[]
    techs: string[]
    description: string
    createdAt: string
    updatedAt: string
  }
}

export async function getTemplate({
  templateSlug,
}: GetTemplateRequest): Promise<GetTemplateResponse> {
  const result = await api
    .get(`templates/${templateSlug}`)
    .json<GetTemplateResponse>()

  return result
}
