import type { FastifyInstance } from 'fastify'
import { getStatus } from './status'
import { authenticateWithGithub, getProfile } from './auth'

export async function routes(app: FastifyInstance) {
  // Definindo uma rota básica
  app.register(getStatus)
  app.register(authenticateWithGithub)
  app.register(getProfile)
}
