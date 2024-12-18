import { env } from '@saas/env'

test.skip('GET to /api/v1/status should return 200', async () => {
  const response = await fetch(`${env.WEB_URL}/api/v1/status`)

  expect(response.status).toBe(200)

  const { data } = await response.json()

  const parsedDate = new Date(data.updated_at).toISOString()

  expect(data).toMatchObject({
    name: 'Banco de Dados',
    status: 'On',
    dependencies: {
      database: {
        version: '17.2',
        max_connections: 100,
        open_connections: 1,
      },
    },
  })

  expect(data.updated_at).toBeDefined()
  expect(data.updated_at).toBe(parsedDate)
})
