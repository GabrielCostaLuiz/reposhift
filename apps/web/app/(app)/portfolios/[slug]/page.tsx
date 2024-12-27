import { Calendar, ExternalLink, Globe, Heart, Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

import BackButton from '@/components/backButton'
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

// export async function generateStaticParams() {
//   const posts = await fetch('https://api.vercel.app/blog', {
//     cache: 'force-cache',
//   }).then((res) => res.json())

//   return posts.map((post: Post) => ({
//     id: String(post.id),
//   }))
// }

export default async function Portfolios({ params }: { params: Params }) {
  const { slug } = await params
  const { template } = await getPortfolio(slug)

  const dateUpdated = new Date(template.createdAt).toLocaleDateString()

  const date = new Date().toISOString()

  return (
    <div className="flex  flex-col bg-zinc-950 text-gray-100">
      <div className="">
        <div className="container mx-auto px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
          <BackButton />

          <div className="grid items-center gap-8  lg:grid-cols-2">
            <div className="relative">
              <Image
                src={template.imgTemplate ?? '/PMEU.jpg'}
                // src={'/PMEU.jpg'}
                width={720}
                height={720}
                alt={`Imagem ${template.name}`}
                className="aspect-video w-full rounded-lg object-cover shadow-lg"
              />
              <div className="absolute right-4 top-4 flex gap-2">
                {template.types.map((type, i) => (
                  <Badge
                    key={type + i}
                    className="bg-purple-600 capitalize text-white"
                  >
                    {type}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <h1 className="text-3xl font-bold capitalize text-gray-100">
                    {template.name}
                  </h1>
                  <ButtonFavorite idPortfolio={template.id} />
                  <ButtonLike
                    idPortfolio={template.id}
                    likes={template.likes}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Última atualização: {dateUpdated}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    <span>Versão 2.0.0</span>
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    <span>1.5k downloads</span>
                  </div> */}
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>Licença MIT</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* <img
                  src="/PMEU.jpg"
                  alt="teste"
                  className="h-10 w-10 rounded-full"
                /> */}
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
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-0 bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:from-purple-700 hover:to-purple-900"
                >
                  <ExternalLink className="h-4 w-4" />
                  Baixar Portfólio
                </Button>

                {/* <Button
                  variant="outline"
                  className="border-purple-600 text-purple-400 hover:bg-purple-900/20"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Compartilhar
                </Button> */}
              </div>

              <Card className="border-zinc-800 bg-zinc-900/50 ">
                <CardContent className="p-4">
                  <h4 className="mb-3 text-sm font-medium text-purple-400">
                    Links Rápidos
                  </h4>
                  <div className="flex items-center gap-3">
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

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card className="border-zinc-800 bg-zinc-900">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-purple-400">
                  Descrição
                </h3>
                <p className="text-gray-300">{template.description}</p>
              </CardContent>
            </Card>

            <Card className="border-zinc-800 bg-zinc-900">
              <CardContent className="p-6">
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

            <Card className="border-zinc-800 bg-zinc-900">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-purple-400">
                  Estatísticas
                </h3>
                <div className="space-y-4">
                  {/* <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-purple-400" />
                    <span className="text-gray-300">1.2k visualizações</span>
                  </div> */}
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
  )
}
