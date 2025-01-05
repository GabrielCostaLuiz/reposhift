import { auth } from '@/http/middlewares/auth'
import { prisma } from '@/lib/prisma'
import type { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

export async function updateFavorite(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(auth)
    .put(
      '/templates/:templateId/favorite',
      {
        schema: {
          tags: ['Templates'],
          summary: 'Favorite or unfavorite a template',
          security: [{ bearerAuth: [] }],
          params: z.object({
            templateId: z.string(),
          }),
          response: {
            200: z.object({
              message: z.string(),
              method: z.string().optional(),
            }),
          },
        },
      },
      async (request, reply) => {
        const { templateId } = request.params
        const userId = await request.getCurrentUserId()

        const template = await prisma.templates.findUnique({
          where: { id: templateId },
          include: { favoriteBy: true },
        })

        if (!template) {
          return reply.status(404).send({
            message: 'Template not found',
          })
        }

        const userAlreadyFavorited = template.favoriteBy.some(
          (user) => user.id === userId
        )

        if (userAlreadyFavorited) {
          await prisma.templates.update({
            where: { id: templateId },
            data: {
              favoriteBy: {
                disconnect: { id: userId },
              },
            },
          })

          return reply.status(200).send({
            message: 'Favorite removed',
            method: 'remove',
          })
        } else {
          await prisma.templates.update({
            where: { id: templateId },
            data: {
              favoriteBy: {
                connect: { id: userId },
              },
            },
          })

          return reply.status(200).send({
            message: 'Template favorited',
            method: 'add',
          })
        }
      }
    )
}
