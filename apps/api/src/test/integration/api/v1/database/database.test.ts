import { prisma } from '@/lib/prisma'

test('Test the backend', async () => {
  const users = await prisma.user.findMany()
  expect(users).toBeDefined()
})
