import { auth } from '@/http/middlewares/auth'
import { prisma } from '@/lib/prisma'
import type { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

export async function getTemplate(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(auth)
    .get(
      '/templates/:templateSlug',
      {
        schema: {
          tags: ['Templates'],
          summary: 'Get a template',
          params: z.object({
            templateSlug: z.string(),
          }),
          security: [
            {
              bearerAuth: [],
            },
          ],
          response: {
            200: z.object({
              template: z.object({
                id: z.string(),
                name: z.string(),
                slug: z.string(),
                reference: z.string(),
                imgTemplate: z.string(),
                urlGithub: z.string(),
                urlDemo: z.string(),
                types: z.array(z.string()),
                techs: z.array(z.string()),
                description: z.string(),
                likes: z.number(),
                createdAt: z.date(),
                updatedAt: z.date(),
              }),
            }),
          },
        },
      },
      async (request, reply) => {
        const { templateSlug } = request.params

        const template = await prisma.templates.findFirst({
          where: {
            slug: templateSlug,
          },
        })

        if (!template) {
          throw new Error('Template not found.')
        }

        return reply.status(200).send({
          template,
        })
      }
    )
}
