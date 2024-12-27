import { api } from './api-client'

export interface User {
  admin: boolean
  name: string | null
  email: string
  avatarUrl: string | null
  htmlUrl: string
  reposUrl: string
  templatesLiked: string[]
  templatesFavorite: string[]
}

export interface GetProfileResponse {
  user: User
}

export async function getProfile() {
  const result = await api.get('profile').json<GetProfileResponse>()

  return result
}
