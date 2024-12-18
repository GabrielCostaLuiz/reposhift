import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
  await prisma.user.create({
    data: {
      name: 'Gabriel',
    },
  })
}

seed().then(() => {
  console.log('Database seeded!')
})
