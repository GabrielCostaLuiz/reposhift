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
import { routes } from './routes/routes'
import fastifyJwt from '@fastify/jwt'
import { errorHandler } from '@/error-handler'

const app = fastify({
  logger: {
    transport: {
      target: '@fastify/one-line-logger',
    },
  },
}).withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.setErrorHandler(errorHandler)

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Reposhift Api',
      description: 'API da Reposhift',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  transform: jsonSchemaTransform,
})
app.register(fastifySwaggerUI, {
  routePrefix: '/docs',
})

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})

app.register(fastifyCors)

app.register(routes)

const start = async () => {
  try {
    await app.listen({ port: env.PORT, host: '0.0.0.0' }).then(() => {
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
