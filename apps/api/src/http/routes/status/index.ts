import type { FastifyInstance } from 'fastify'
import { prisma } from '@/lib/prisma'
import { env } from '@saas/env'

export async function getStatus(app: FastifyInstance) {
  app.get('/status', async (request, reply) => {
    const updatedAt = new Date().toISOString()

    try {
      const databaseVersion: [{ server_version: string }] =
        await prisma.$queryRaw`SHOW server_version;`

      const databaseMaxConnectionsResult: [{ max_connections: number }] =
        await prisma.$queryRaw`SHOW max_connections;`

      const databaseMaxConnectionsValue =
        databaseMaxConnectionsResult[0].max_connections

      const databaseName = env.POSTGRES_DB

      const databaseOpenConnectionsResult: [{ count: number }] =
        await prisma.$queryRaw`SELECT COUNT(*)::int FROM pg_stat_database WHERE datname = ${databaseName};`

      const databaseOpenConnectionsValue =
        databaseOpenConnectionsResult[0].count

      return reply.status(200).send({
        name: 'Banco de Dados',
        status: 'online',
        message: 'Database is connected',

        updated_at: updatedAt,
        dependencies: {
          database: {
            version: databaseVersion[0].server_version,
            max_connections: +databaseMaxConnectionsValue,
            open_connections: databaseOpenConnectionsValue,
          },
        },
      })
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error'

      return reply.status(500).send({
        name: 'Banco de Dados',
        status: 'offline',
        message: 'Database is not connected',
        error: errorMessage,

        updated_at: updatedAt,
      })
    }
  })
}
