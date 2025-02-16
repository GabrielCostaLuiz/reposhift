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
                name: z.string().nullable(),
                email: z.string().email(),
                avatarUrl: z.string().url().nullable(),
                htmlUrl: z.string().url(),
                reposUrl: z.string().url(),
                admin: z.boolean().optional(),
                templatesLiked: z.array(
                  z.object({
                    id: z.string(),
                  })
                ),
                templatesFavorite: z.array(
                  z.object({
                    id: z.string(),
                  })
                ),
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
            templatesLiked: {
              select: {
                id: true,
              },
            },
            templatesFavorite: {
              select: {
                id: true,
              },
            },
          },
          where: {
            id: userId,
          },
        })

        if (!user) {
          throw new BadRequestError('User not found.')
        }

        if (user.email === 'gabrielbragacostaluiz@gmail.com') {
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
