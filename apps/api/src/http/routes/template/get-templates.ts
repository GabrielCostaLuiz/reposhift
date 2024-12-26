import { prisma } from '@/lib/prisma'
import { auth } from '@/http/middlewares/auth'
import { type FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'
export async function getTemplates(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(auth)
    .get(
      '/templates',
      {
        schema: {
          tags: ['Templates'],
          summary: 'Get templates',
          security: [{ bearerAuth: [] }],
          response: {
            200: z.object({
              templates: z.array(
                z.object({
                  id: z.string(),
                  name: z.string(),
                  slug: z.string(),
                  reference: z.string(),
                  imgTemplate: z.string(),
                  urlGithub: z.string(),
                  urlDemo: z.string(),
                  types: z.array(z.string()),
                  likes: z.number(),
                  createdAt: z.date(),
                  updatedAt: z.date(),
                })
              ),
            }),
          },
        },
      },
      async (request, reply) => {
        const templates = await prisma.templates.findMany({
          select: {
            id: true,
            name: true,
            slug: true,
            reference: true,
            imgTemplate: true,
            urlGithub: true,
            urlDemo: true,
            types: true,
            likes: true,
            createdAt: true,
            updatedAt: true,
          },
        })

        return reply.status(200).send({
          templates,
        })
      }
    )
}
