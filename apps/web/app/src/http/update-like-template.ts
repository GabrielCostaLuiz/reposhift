import { api } from './api-client'

export interface UpdateLikeTemplateRequest {
  templateId: string
}

export interface UpdateLikeTemplateResponse {
  message: string
  likes: number
  method: string
}

export async function updateLikeTemplate({
  templateId,
}: UpdateLikeTemplateRequest): Promise<UpdateLikeTemplateResponse> {
  const result = await api
    .put(`templates/${templateId}/like`, {
      json: {
        templateId,
      },
    })
    .json<UpdateLikeTemplateResponse>()

  return result
}
