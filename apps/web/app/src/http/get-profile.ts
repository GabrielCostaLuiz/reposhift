import { api } from './api-client'

interface GetProfileResponse {
  user: {
    id: string
    name: string | null
    email: string
    avatarUrl: string | null
    htmlUrl: string
    reposUrl: string
  }
}

export async function getProfile() {
  console.log('oiii')
  const result = await api.get('profile').json<GetProfileResponse>()
  console.log(result)

  return result
}
