import { auth } from '@/http/middlewares/auth'
import { prisma } from '@/lib/prisma'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'
import { BadRequestError } from '../_errors/bad-request-error'

export async function getProfile(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(auth)
    .get(
      '/profile',
      {
        schema: {
          tags: ['Auth'],
          summary: 'Get profile',
          security: [{ bearerAuth: [] }],
          response: {
            200: z.object({
              user: z.object({
                // id: z.string().uuid(),
                name: z.string().nullable(),
                email: z.string().email(),
                avatarUrl: z.string().url().nullable(),
                htmlUrl: z.string().url(),
                reposUrl: z.string().url(),
                admin: z.boolean().optional(),
              }),
            }),
          },
        },
      },
      async (request, reply) => {
        const userId = await request.getCurrentUserId()

        const user = await prisma.user.findUnique({
          select: {
            id: true,
            name: true,
            email: true,
            avatarUrl: true,
            htmlUrl: true,
            reposUrl: true,
          },
          where: {
            id: userId,
          },
        })

        if (!user) {
          throw new BadRequestError('User not found.')
        }

        if (user.id === '91f2592c-9963-490d-bfd4-ef8c76495c40') {
          return reply.send({
            user: {
              ...user,
              admin: true,
            },
          })
        }

        return reply.send({ user })
      }
    )
}
