import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { getProfile } from '@/http/get-profile'

export async function isAuthenticated() {
  const cookiesResponse = await cookies()
  return cookiesResponse.get('token')?.value
}

export async function auth() {
  const cookiesResponse = await cookies()
  const token = cookiesResponse.get('token')?.value

  if (!token) {
    redirect('/auth')
  }

  try {
    const { user } = await getProfile()

    console.log(user)

    return { user }
  } catch {}

  redirect('/api/auth/sign-out')
}
