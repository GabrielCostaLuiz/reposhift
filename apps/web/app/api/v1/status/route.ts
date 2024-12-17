import { env } from '@saas/env'

export async function GET() {
  const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/status`)
  const data = await response.json()

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  if (data.status === 'Off') {
    throw new Error('Database is not connected')
  }

  return Response.json(
    {
      data,
    },
    { status: response.status },
  )
}
