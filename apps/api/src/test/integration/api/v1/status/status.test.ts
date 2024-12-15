import { env } from '@saas/env'

test('GET to /api/v1/status should return 200', async () => {
  const response = await fetch(`${env.WEB_URL}/api/v1/status`)

  expect(response.status).toBe(200)
})
