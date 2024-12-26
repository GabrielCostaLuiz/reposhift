'use client'

import { useEffect, useState } from 'react'

import PortfolioCard from '@/components/portfolio-card'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useUserStore } from '@/store/user'
import { set } from 'date-fns'

// export interface templatesProps {
//   id: number
//   title: string
//   image: string
//   creator: string
//   slug: string
//   date: string
//   category: string
//   like: number
//   isFavorite: boolean
// }

export interface Template {
  id: string
  name: string
  slug: string
  reference: string
  imgTemplate: string
  urlGithub: string
  likes: number
  urlDemo: string
  types: string[]
  createdAt: string
  updatedAt: string
}

export default function PortfolioGrid({
  templates,
}: {
  templates: Template[]
}) {
  const [filterProjects, setFilterProjects] = useState<Template[]>(templates)
  const [filterCategories, setFilterCategories] = useState<string>('all')
  const [orderBy, setOrderBy] = useState<string>('recent')
  const [categories, setCategories] = useState<string[]>([])

  function handleChangeCategories(category: string) {
    setFilterCategories(category)
  }

  function handleChangeOrderBy(order: string) {
    setOrderBy(order)
  }

  useEffect(() => {
    let filteredProjects = [...templates]

    // Filtragem por categoria
    // if (filterCategories !== 'all') {
    //   filteredProjects = filteredProjects.filter((portfolio) =>
    //     portfolio.types.includes(filterCategories)
    //   )
    // }
    if (filterCategories !== 'all') {
      filteredProjects = filteredProjects.filter((portfolio) =>
        portfolio.types.includes(filterCategories)
      )
    }

    // Ordenação
    switch (orderBy) {
      case 'recent':
        // Ordena pelos projetos mais recentes (com base na data)
        filteredProjects.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        break
      case 'popular':
        // Ordena pelos projetos mais populares (por exemplo, com base no campo `isFavorite`)
        filteredProjects.sort((a, b) => b.likes - a.likes)
        break
      case 'nameZa':
        // Ordena de A a Z pelo nome do projeto
        filteredProjects.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'nameAz':
        // Ordena de Z a A pelo nome do projeto
        filteredProjects.sort((a, b) => b.name.localeCompare(a.name))
        break
      default:
        break
    }

    // Atualiza o estado com os projetos filtrados e ordenados
    setFilterProjects(filteredProjects)
  }, [filterCategories, orderBy, templates])

  // useEffect(() => {
  //   setFilterProjects(templates)

  //   console.log(templates)
  // })
  useEffect(() => {
    // Extrai categorias únicas dos projetos
    const uniqueCategories = Array.from(
      new Set(templates.flatMap((template) => template.types))
    )
    setCategories(uniqueCategories)
  }, [templates])

  return (
    <div>
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Select defaultValue="all" onValueChange={handleChangeCategories}>
              <SelectTrigger className="w-full border-gray-800 bg-[#18181B] text-gray-300 sm:w-[180px]">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent className="border-gray-800 bg-[#18181B]">
                <SelectItem value="all" className="text-gray-300">
                  Todas Categorias
                </SelectItem>
                {categories.map((category) => (
                  <SelectItem
                    key={category}
                    value={category}
                    className="text-gray-300"
                  >
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              defaultValue="recent"
              onValueChange={(e) => handleChangeOrderBy(e)}
            >
              <SelectTrigger className="w-full border-gray-800 bg-[#18181B] text-gray-300 sm:w-[180px]">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent className="border-gray-800 bg-[#18181B]">
                <SelectItem value="recent" className="text-gray-300">
                  Mais Recentes
                </SelectItem>
                <SelectItem value="popular" className="text-gray-300">
                  Mais Populares
                </SelectItem>
                <SelectItem value="nameZa" className="text-gray-300">
                  Nome A-Z
                </SelectItem>
                <SelectItem value="nameAz" className="text-gray-300">
                  Nome Z-A
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full sm:w-auto">
            <Badge
              variant="secondary"
              className="w-full bg-[#18181B] px-4 py-2 text-center text-gray-300 sm:w-auto"
            >
              {filterProjects.length}{' '}
              {filterProjects.length > 1
                ? 'modelos encontrados'
                : 'modelo encontrado'}
            </Badge>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {filterProjects.length >= 1 ? (
            filterProjects.map((portfolio) => (
              <PortfolioCard key={portfolio.id} portfolio={portfolio} />
            ))
          ) : (
            <div className="col-span-3 flex items-center justify-center">
              <p className="w-full">Nenhum modelo encontrado</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
