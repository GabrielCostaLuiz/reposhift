import type { FastifyInstance } from 'fastify'
import { getStatus } from './status'
import { authenticateWithGithub, getProfile } from './auth'
import {
  createTemplate,
  getTemplates,
  getTemplatesFavorite,
  updateFavorite,
  updateLike,
} from './template'

export async function routes(app: FastifyInstance) {
  app.register(getStatus)
  app.register(authenticateWithGithub)
  app.register(getProfile)
  app.register(createTemplate)
  app.register(getTemplates)
  app.register(updateLike)
  app.register(getTemplatesFavorite)
  app.register(updateFavorite)
}
