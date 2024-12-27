import { auth } from '@/http/middlewares/auth'
import { prisma } from '@/lib/prisma'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

export async function getTemplatesFavorite(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(auth)
    .get(
      '/templates/favorite',
      {
        schema: {
          tags: ['Templates'],
          summary: 'Get all templates favorite by the current user',
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
                  techs: z.array(z.string()),
                  description: z.string(),
                  likes: z.number(),
                  createdAt: z.string(), // ISO format
                  updatedAt: z.string(), // ISO format
                })
              ),
            }),
            500: z.object({
              error: z.string(),
            }),
          },
        },
      },
      async (request, reply) => {
        try {
          // Obtém o ID do usuário atual do middleware
          const userId = await request.getCurrentUserId()

          // Busca os templates curtidos pelo usuário
          const templates = await prisma.templates.findMany({
            where: {
              favoriteBy: {
                some: {
                  id: userId, // Relacionamento com o usuário
                },
              },
            },
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
              techs: true,
              description: true,
              createdAt: true,
              updatedAt: true,
            },
          })

          return reply.status(200).send({
            templates: templates.map((template) => ({
              ...template,
              createdAt: template.createdAt.toISOString(),
              updatedAt: template.updatedAt.toISOString(),
            })),
          })
        } catch (error) {
          console.error('Erro ao buscar templates favoritados:', error)
          return reply.status(500).send({
            error:
              'Erro ao buscar os templates favoritados. Tente novamente mais tarde.',
          })
        }
      }
    )
}
