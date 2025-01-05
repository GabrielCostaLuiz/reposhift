import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
  try {
    const user = await prisma.user.create({
      data: {
        name: 'Gabriel',
        email: 'gabriel@example.com',
        passwordHash: 'hashedpassword123',
        avatarUrl: 'https://example.com/avatar.jpg',
        htmlUrl: 'https://github.com/gabriel',
        reposUrl: 'https://api.github.com/users/gabriel/repos',
      },
    })

    const token = await prisma.token.create({
      data: {
        type: 'PASSWORD_RECOVER',
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    })

    const account = await prisma.account.create({
      data: {
        provider: 'GITHUB',
        providerAccountId: '123456789',
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    })
  } catch (error) {
    console.error('Erro ao rodar o seed:', error)
  } finally {
    await prisma.$disconnect()
  }
}

seed().then(() => {
  console.log('Seed finalizado!')
})
