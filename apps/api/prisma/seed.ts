import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    // Criação de um usuário
    const user = await prisma.user.create({
      data: {
        name: 'Gabriel',
        email: 'gabriel@example.com',
        passwordHash: 'hashedpassword123', // Substitua por um hash real
        avatarUrl: 'https://example.com/avatar.jpg',
        htmlUrl: 'https://github.com/gabriel',
        reposUrl: 'https://api.github.com/users/gabriel/repos',
      },
    });

    console.log(`Usuário criado: ${user.name}`);

    // Criação de um token vinculado ao usuário
    const token = await prisma.token.create({
      data: {
        type: 'PASSWORD_RECOVER',
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    console.log(`Token criado: ${token.type} para o usuário ${user.name}`);

    // Criação de uma conta vinculada ao usuário
    const account = await prisma.account.create({
      data: {
        provider: 'GITHUB',
        providerAccountId: '123456789', // Substitua pelo ID real da conta do provedor
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    console.log(`Conta criada: ${account.provider} para o usuário ${user.name}`);
  } catch (error) {
    console.error('Erro ao rodar o seed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed().then(() => {
  console.log('Seed finalizado!');
});
