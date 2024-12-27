import { api } from './api-client'

export interface Template {
  name: string
  slug: string
  reference: string
  imgTemplate: string
  urlGithub: string
  urlDemo: string
  types: string[]
  techs: string[]
  description: string
}

interface CreateTemplateRequest {
  template: Template
}

type CreateTemplateResponse = void

export async function createTemplate({
  template,
}: CreateTemplateRequest): Promise<CreateTemplateResponse> {
  await api.post('templates', { json: template })
}
