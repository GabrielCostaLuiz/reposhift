import React from 'react'
import {
  Heart,
  Share2,
  Eye,
  Globe,
  Calendar,
  Tag,
  Download,
  ExternalLink,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import BackButton from '@/components/backButton'
import { FaGithub } from 'react-icons/fa'

type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params

  return {
    title: slug,
  }
}

export default async function Portfolios({ params }: { params: Params }) {
  const { slug } = await params

  const isFavorite = false
  const like = 2
  const date = new Date().toISOString()
  const image = '/PMEU.jpg'
  const title = 'teste'

  return (
    <div className="flex  flex-col bg-zinc-950 text-gray-100">
      <div className="">
        {/* Header with back button */}
        <div className="container mx-auto px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
          <BackButton />

          {/* Hero Section */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Image Section */}
            <div className="relative">
              <img
                src={image}
                alt={title}
                className="aspect-video w-full rounded-lg object-cover shadow-lg"
              />
              <div className="absolute right-4 top-4 flex gap-2">
                <Badge className="bg-purple-600 text-white">teste</Badge>
              </div>
            </div>

            {/* Info Section - Enhanced with more content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold capitalize text-gray-100">
                  {slug.replaceAll('-', ' ')}
                </h1>

                {/* Additional project info */}
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Última atualização: 25 Mar 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    <span>Versão 2.0.0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    <span>1.5k downloads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>Licença MIT</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src="/PMEU.jpg"
                  alt="teste"
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-100">teste</p>
                  <p className="text-sm text-gray-400">
                    {new Date(date).toLocaleDateString('pt-BR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-0 bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:from-purple-700 hover:to-purple-900"
                >
                  <ExternalLink className="h-4 w-4" />
                  Baixar Portfólio
                </Button>
                <Button
                  variant="outline"
                  className={`flex items-center gap-2 ${
                    isFavorite
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'border-purple-600 text-purple-400 hover:bg-purple-900/20'
                  }`}
                >
                  <Heart
                    className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`}
                  />
                  {like}
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-400 hover:bg-purple-900/20"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Compartilhar
                </Button>
              </div>

              {/* Quick links card */}
              <Card className="border-zinc-800 bg-zinc-900/50">
                <CardContent className="p-4">
                  <h4 className="mb-3 text-sm font-medium text-purple-400">
                    Links Rápidos
                  </h4>
                  <div className="flex gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-purple-400"
                    >
                      <FaGithub className="mr-2 h-4 w-4" />
                      Repositório
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-purple-400"
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Details Section */}
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card className="border-zinc-800 bg-zinc-900">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-purple-400">
                  Descrição
                </h3>
                <p className="text-gray-300">
                  Um portfólio moderno e minimalista perfeito para mostrar seus
                  trabalhos criativos. Construído com as melhores práticas de
                  design e desenvolvimento web.
                </p>
              </CardContent>
            </Card>

            <Card className="border-zinc-800 bg-zinc-900">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-purple-400">
                  Tecnologias
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-purple-600 text-purple-400"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-purple-600 text-purple-400"
                  >
                    Next.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-purple-600 text-purple-400"
                  >
                    Tailwind
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-zinc-800 bg-zinc-900">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-purple-400">
                  Estatísticas
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-purple-400" />
                    <span className="text-gray-300">1.2k visualizações</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-purple-400" />
                    <span className="text-gray-300">{like} curtidas</span>
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
