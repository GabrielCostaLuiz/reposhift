import { auth } from '@/http/middlewares/auth'
import { prisma } from '@/lib/prisma'
import type { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

export async function updateLike(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(auth)
    .put(
      '/templates/:templateId/like',
      {
        schema: {
          tags: ['Templates'],
          summary: 'Like or unlike a template',
          security: [{ bearerAuth: [] }],
          params: z.object({
            templateId: z.string(),
          }),
          response: {
            200: z.object({
              message: z.string(),
              likes: z.number().optional(),
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
          include: { likedBy: true },
        })

        if (!template) {
          return reply.status(404).send({
            message: 'Template not found',
          })
        }

        const userAlreadyLiked = template.likedBy.some(
          (user) => user.id === userId
        )

        if (userAlreadyLiked) {
          await prisma.templates.update({
            where: { id: templateId },
            data: {
              likes: template.likes - 1,
              likedBy: {
                disconnect: { id: userId },
              },
            },
          })

          return reply.status(200).send({
            message: 'Like removed',
            likes: template.likes - 1,
            method: 'remove',
          })
        } else {
          await prisma.templates.update({
            where: { id: templateId },
            data: {
              likes: template.likes + 1,
              likedBy: {
                connect: { id: userId },
              },
            },
          })

          return reply.status(200).send({
            message: 'Template liked',
            likes: template.likes + 1,
            method: 'add',
          })
        }
      }
    )
}
