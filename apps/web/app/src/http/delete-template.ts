import { api } from './api-client'

export interface DeleteTemplateRequest {
  templateId: string
}

type DeleteTemplateResponse = void

export async function deleteTemplate({
  templateId,
}: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
  const result = await api
    .delete(`templates/${templateId}`)
    .json<DeleteTemplateResponse>()

  return result
}
