import { Calendar, Globe, Heart, Tag, Terminal } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

import BackButton from '@/components/backButton'
import ButtonDownloadPortfolio from '@/components/button-download-portfolio'
import ButtonFavorite from '@/components/buttonFavorite'
import ButtonLike from '@/components/buttonLike'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { getTemplate } from '@/http/get-template'

type Params = Promise<{ slug: string }>

async function getPortfolio(slug: string) {
  const template = await getTemplate({
    templateSlug: slug,
  })
  return template
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  return {
    title: slug,
  }
}

export default async function Portfolios({ params }: { params: Params }) {
  const { slug } = await params
  const { template } = await getPortfolio(slug)

  const dateUpdated = new Date(template.createdAt).toLocaleDateString()
  const date = new Date().toISOString()

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-gray-100">
      <div className="flex-1">
        <div className="container mx-auto px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
          <div className="mb-6">
            <BackButton />
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="relative w-full">
              <Image
                src={template.imgTemplate ?? '/PMEU.jpg'}
                width={720}
                height={720}
                alt={`Imagem ${template.name}`}
                className="aspect-video w-full rounded-lg object-cover shadow-lg"
              />
              <div className="absolute right-2 top-2 flex flex-wrap gap-2 sm:right-4 sm:top-4">
                {template.types.map((type, i) => (
                  <Badge
                    key={type + i}
                    className="bg-purple-600 text-sm capitalize text-white"
                  >
                    {type}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-2xl font-bold capitalize text-gray-100 sm:text-3xl">
                    {template.name}
                  </h1>
                  <div className="flex gap-2">
                    <ButtonFavorite idPortfolio={template.id} />
                    <ButtonLike
                      idPortfolio={template.id}
                      likes={template.likes}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 text-sm text-gray-400 sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">Última atualização: {dateUpdated}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    <span>Versão 2.0.0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>Licença MIT</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <p className="font-medium text-gray-100">
                    Ref: {template.reference}
                  </p>
                  <p className="text-sm text-gray-400">
                    {new Date(date).toLocaleDateString('pt-BR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <ButtonDownloadPortfolio nameTemplate={template.slug} />
              </div>

              <Card className="border-zinc-800 bg-zinc-900/50">
                <CardContent className="p-4">
                  <h4 className="mb-3 text-sm font-medium text-purple-400">
                    Links Rápidos
                  </h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href={template.urlGithub}
                      target="_blank"
                      prefetch={false}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-purple-400"
                      >
                        <FaGithub className="mr-2 h-4 w-4" />
                        Repositório
                      </Button>
                    </Link>

                    <Link
                      href={template.urlDemo}
                      target="_blank"
                      prefetch={false}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-purple-400"
                      >
                        <Globe className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:mt-12">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="h-fit border-zinc-800 bg-zinc-900">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="mb-4 text-lg font-semibold text-purple-400">
                    Descrição
                  </h3>
                  <p className="text-gray-300">{template.description}</p>
                </CardContent>
              </Card>

              <Card className="h-fit border-zinc-800 bg-zinc-900">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="mb-4 text-lg font-semibold text-purple-400">
                    <Terminal className="mr-2 inline-block h-5 w-5" />
                    Guia de Instalação
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <ol className="list-decimal space-y-2 pl-4">
                      <li>Faça o download do template</li>
                      <li>Descompacte o arquivo baixado</li>
                      <li>Abra a pasta no terminal</li>
                      <li>
                        Execute um dos comandos:
                        <div className="mt-2 space-y-2">
                          <code className="block w-full overflow-x-auto rounded bg-zinc-800 p-2">
                            npm install
                          </code>
                          <code className="block w-full overflow-x-auto rounded bg-zinc-800 p-2">
                            pnpm install
                          </code>
                          <code className="block w-full overflow-x-auto rounded bg-zinc-800 p-2">
                            yarn install
                          </code>
                        </div>
                      </li>
                      <li>
                        Para personalizar:
                        <ul className="mt-2 list-disc pl-4">
                          <li>
                            Acesse a pasta{' '}
                            <code className="rounded bg-zinc-800 px-1">
                              utils
                            </code>
                          </li>
                          <li>
                            Abra o arquivo{' '}
                            <code className="rounded bg-zinc-800 px-1">
                              constants.js
                            </code>
                          </li>
                          <li>
                            Edite as informações de perfil e descrições conforme
                            necessário
                          </li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="h-fit border-zinc-800 bg-zinc-900">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="mb-4 text-lg font-semibold text-purple-400">
                    Tecnologias
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {template.techs.map((tech, i) => (
                      <Badge
                        key={tech + i}
                        variant="outline"
                        className="border-purple-600 capitalize text-purple-400"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="h-fit border-zinc-800 bg-zinc-900">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="mb-4 text-lg font-semibold text-purple-400">
                    Estatísticas
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-purple-400" />
                      <span className="text-gray-300">
                        {template.likes} curtidas
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}