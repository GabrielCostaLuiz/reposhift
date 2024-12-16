import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    PORT: z.coerce.number().default(3333),
    DATABASE_URL: z.string().url(),
    BACKEND_URL: z.string().url(),
    WEB_URL: z.string().url(),
    POSTGRES_DB: z.string(),

    // JWT_SECRET: z.string(),

    // GITHUB_OAUTH_CLIENT_ID: z.string(),
    // GITHUB_OAUTH_CLIENT_SECRET: z.string(),
    // GITHUB_OAUTH_CLIENT_REDIRECT_URI: z.string().url(),
  },
  //variaveis para o client server, não é uma variavel para o web/api, é a variavel que users podem ver, CUIDADO
  // client: {},

  //variaveis compartilhadas pelo back e front
  // shared: {
  //   NEXT_PUBLIC_API_URL: z.string().url(),
  // },

  //pegar todas variaveis e colocar aqui, mais para o frontend, se ele não encontra process.env, ele elimina, isso aqui necessita, se não a variavel não aparece no codigo next
  runtimeEnv: {
    PORT: process.env.SERVER_PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    BACKEND_URL: process.env.BACKEND_URL,
    WEB_URL: process.env.WEB_URL,
    POSTGRES_DB: process.env.POSTGRES_DB,
    // POSTGRES_USER: process.env.POSTGRES_USER,
    // POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    // POSTGRES_HOST: process.env.POSTGRES_HOST,
    // POSTGRES_PORT: process.env.POSTGRES_PORT,

    // JWT_SECRET: process.env.JWT_SECRET,
    // GITHUB_OAUTH_CLIENT_ID: process.env.GITHUB_OAUTH_CLIENT_ID,
    // GITHUB_OAUTH_CLIENT_SECRET: process.env.GITHUB_OAUTH_CLIENT_SECRET,
    // GITHUB_OAUTH_CLIENT_REDIRECT_URI:
    //   process.env.GITHUB_OAUTH_CLIENT_REDIRECT_URI,
    // NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  //variavel ambiente com valor vazio, trate como undefined
  emptyStringAsUndefined: true,
})
