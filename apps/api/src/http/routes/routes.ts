import type { FastifyInstance } from 'fastify'
import { getStatus } from './status'
import { authenticateWithGithub, getProfile } from './auth'
import { createTemplate, getTemplates } from './template'

export async function routes(app: FastifyInstance) {
  // Definindo uma rota básica
  app.register(getStatus)
  app.register(authenticateWithGithub)
  app.register(getProfile)
  app.register(createTemplate)
  app.register(getTemplates)
}
