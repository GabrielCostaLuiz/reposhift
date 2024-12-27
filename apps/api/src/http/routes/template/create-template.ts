import { auth } from '@/http/middlewares/auth'
import { prisma } from '@/lib/prisma'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

export async function createTemplate(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(auth)
    .post(
      '/templates',
      {
        schema: {
          tags: ['Templates'],
          summary: 'Create a template',
          security: [{ bearerAuth: [] }],
          body: z.object({
            name: z.string(),
            slug: z.string(),
            reference: z.string(),
            imgTemplate: z.string().url(),
            urlGithub: z.string().url(),
            urlDemo: z.string().url(),
            types: z.array(z.string()),
            techs: z.array(z.string()),
            description: z.string(),
          }),
          response: {
            201: z.object({
              templateId: z.string().uuid(),
            }),
          },
        },
      },
      async (request, reply) => {
        const userId = await request.getCurrentUserId()

        const user = await prisma.user.findFirst({
          where: {
            id: userId,
          },
        })

        if (user?.email !== 'gabrielbragacostaluiz@gmail.com') {
          throw new Error('User not allowed to create a template.')
        }

        const {
          name,
          slug,
          reference,
          imgTemplate,
          urlGithub,
          urlDemo,
          types,
          techs,
          description,
        } = request.body

        const templateWithSameSlug = await prisma.templates.findFirst({
          where: {
            slug,
            name,
          },
        })

        if (templateWithSameSlug) {
          throw new Error('Template with same slug/name already exists.')
        }

        const template = await prisma.templates.create({
          data: {
            name,
            slug,
            reference,
            imgTemplate,
            urlGithub,
            urlDemo,
            types,
            description,
            techs,
            likes: 0,
          },
        })

        return reply.status(201).send({ templateId: template.id })
      }
    )
}
