import type { FastifyInstance } from 'fastify'
import { prisma } from '@/lib/prisma'

export async function getStatus(app: FastifyInstance) {
  app.get('/status', async (request, reply) => {
    try {
      const checkDatabase = await prisma.$queryRaw`SELECT 1`
      console.log(checkDatabase)

      return reply.status(200).send({
        name: 'Banco de Dados',
        status: 'On',
        message: 'Database is connected',
        // uptime: new Date().getTime() - process.uptime(),
        timestamp: new Date().toISOString(),
      })
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error'

      return reply.status(500).send({
        name: 'Banco de Dados',
        status: 'Off',
        message: 'Database is not connected',
        error: errorMessage,
        timestamp: new Date().toISOString(),
      })
    }
  })
}
