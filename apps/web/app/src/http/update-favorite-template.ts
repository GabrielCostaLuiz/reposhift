import { api } from './api-client'

export interface UpdateFavoriteTemplateRequest {
  templateId: string
}

export interface UpdateFavoriteTemplateResponse {
  message: string
  method: string
}

export async function updateFavoriteTemplate({
  templateId,
}: UpdateFavoriteTemplateRequest): Promise<UpdateFavoriteTemplateResponse> {
  const result = await api
    .put(`templates/${templateId}/favorite`, {
      json: {
        templateId,
      },
    })
    .json<UpdateFavoriteTemplateResponse>()

  return result
}
