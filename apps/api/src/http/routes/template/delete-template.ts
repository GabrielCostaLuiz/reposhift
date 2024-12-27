import { auth } from '@/http/middlewares/auth'
import { prisma } from '@/lib/prisma'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

export async function deleteTemplate(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(auth)
    .delete(
      '/templates/:templateId',
      {
        schema: {
          tags: ['Templates'],
          summary: 'Delete a template',
          security: [{ bearerAuth: [] }],
          params: z.object({
            templateId: z.string().uuid(),
          }),
          response: {
            204: z.null(),
          },
        },
      },
      async (request, reply) => {
        const { templateId } = request.params

        const userId = await request.getCurrentUserId()

        const user = await prisma.user.findFirst({
          where: {
            id: userId,
          },
        })

        if (user?.email !== 'gabrielbragacostaluiz@gmail.com') {
          throw new Error('User not allowed to delete a template.')
        }

        const template = await prisma.templates.findUnique({
          where: {
            id: templateId,
          },
        })

        if (!template) {
          throw new Error('Template not found.')
        }

        await prisma.templates.delete({
          where: {
            id: templateId,
          },
        })

        return reply.status(204).send()
      }
    )
}
