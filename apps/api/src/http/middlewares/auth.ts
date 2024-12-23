import type { FastifyInstance } from 'fastify'
import { fastifyPlugin } from 'fastify-plugin'

import { UnauthorizedError } from '../routes/_errors/unaunthorized-error'

export const auth = fastifyPlugin(async (app: FastifyInstance) => {
  app.addHook('preHandler', async (request) => {
    request.getCurrentUserId = async () => {
      try {
        console.log(request.jwtVerify)
        const { sub } = await request.jwtVerify<{ sub: string }>()
        console.log(sub)

        return sub
      } catch {
        throw new UnauthorizedError('Invalid token')
      }
    }
  })
})
