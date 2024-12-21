import { prisma } from '@/lib/prisma'

describe("TEST Backend", () => {
  describe("Prisma", () => {
    test('should be able to connect to the prisma', async () => {
      await prisma.$connect()
      expect(prisma).toBeDefined()
    })

    test('should be able to return a user of the prisma', async () => {
      const users = await prisma.user.findMany()
      expect(users).toBeDefined()
    })
  })
  
})

