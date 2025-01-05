import type { FastifyInstance } from 'fastify'
import { getStatus } from './status'
import { authenticateWithGithub, getProfile } from './auth'
import {
  createTemplate,
  deleteTemplate,
  downloadTemplate,
  getTemplate,
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
  app.register(getTemplate)
  app.register(deleteTemplate)
  app.register(downloadTemplate)
}
