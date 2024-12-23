import { env } from '@saas/env'
import { getCookie, type CookiesFn } from 'cookies-next'

import ky from 'ky'

export const api = ky.create({
  prefixUrl: env.NEXT_PUBLIC_API_URL,
  hooks: {
    beforeRequest: [
      async (request) => {
        let cookieStore: CookiesFn | undefined

        if (typeof window === 'undefined') {
          const { cookies: serverCookies } = await import('next/headers')
       
          cookieStore = serverCookies
        }
        const token = await getCookie('token', { cookies: cookieStore })

        if (token) {
         
          request.headers.set('Authorization', `Bearer ${token}`)
        }
      },
    ],
  },
})
