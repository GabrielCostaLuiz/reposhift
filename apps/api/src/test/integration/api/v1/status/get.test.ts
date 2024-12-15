test('GET to /api/v1/status should return 200', async () => {
  const response = await fetch('http://localhost:3000/api/v1/status')
  const responseBody = await response.json()

  expect(response.status).toBe(200)
  expect(responseBody).toMatchObject({
    message: 'Servidor Web Funcionando',
  })
})