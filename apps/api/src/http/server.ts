import { fastify } from 'fastify'
import { env } from '@saas/env'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import fastifyCors from '@fastify/cors'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUI from '@fastify/swagger-ui'
import { getStatus } from './routes/status'

const app = fastify({
  logger: {
    transport: {
      target: '@fastify/one-line-logger',
    },
  },
}).withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Reposhift Api',
      description: 'API da Reposhift',
      // contact: {
      //   name: 'Gabriel',
      //   email: 'XXXXXXXXXXXXXXXXXXX',
      // },
      // license: {
      //   name: 'MIT',
      //   url: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      // },
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUI, {
  routePrefix: '/docs',
})

app.register(fastifyCors)

// Definindo uma rota básica
app.register(getStatus)

const start = async () => {
  try {
    await app.listen({ port: env.PORT, host: env.HOST }).then(() => {
      console.log('HTTP server running!')
    })
  } catch (err) {
    app.log.error({
      message: 'Erro ao iniciar o servidor',
      error: err,
    })
    process.exit(1)
  }
}

start()
