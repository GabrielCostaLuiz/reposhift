'use client'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import PortfolioCard from '@/components/portfolio-card'
import { useEffect, useState } from 'react'

export interface PortfoliosProps {
  id: number
  title: string
  image: string
  creator: string
  slug: string
  date: string
  category: string
  like: number
  isFavorite: boolean
}

const portfolios = [
  {
    id: 1,
    title: 'Modern Portfolio',
    image: '/api/placeholder/400/300',
    creator: 'John Doe',
    slug: 'modern-portfolio',
    date: '2024-03-20',
    category: 'Personal',
    like: 20,
    isFavorite: false,
  },
  {
    id: 2,
    title: 'Creative Agency',
    image: '/api/placeholder/400/300',
    creator: 'Jane Smith',
    slug: 'creative-agency',
    date: '2024-03-18',
    category: 'Agency',
    like: 4,
    isFavorite: true,
  },
]

export default function PortfolioGrid() {
  const [filterProjects, setFilterProjects] = useState(portfolios)
  const [filterCategories, setFilterCategories] = useState<string>('all')
  const [orderBy, setOrderBy] = useState<string>('recent')

  function handleChangeCategories(category: string) {
    if (category === 'all') {
      setFilterCategories('all')
    } else {
      setFilterCategories(category)
    }
  }

  function handleChangeOrderBy(order: string) {
    setOrderBy(order)
  }

  useEffect(() => {
    let filteredProjects = [...portfolios]

    // Filtragem por categoria
    if (filterCategories !== 'all') {
      filteredProjects = filteredProjects.filter(
        (portfolio) =>
          portfolio.category.toLocaleLowerCase() === filterCategories
      )
    }

    // Ordenação
    switch (orderBy) {
      case 'recent':
        // Ordena pelos projetos mais recentes (com base na data)
        filteredProjects.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        break
      case 'popular':
        // Ordena pelos projetos mais populares (por exemplo, com base no campo `isFavorite`)
        filteredProjects.sort((a, b) => b.like - a.like)
        break
      case 'nameZa':
        // Ordena de A a Z pelo nome do projeto
        filteredProjects.sort((a, b) => a.title.localeCompare(b.title))
        break
      case 'nameAz':
        // Ordena de Z a A pelo nome do projeto
        filteredProjects.sort((a, b) => b.title.localeCompare(a.title))
        break
      default:
        break
    }

    // Atualiza o estado com os projetos filtrados e ordenados
    setFilterProjects(filteredProjects)
  }, [filterCategories, orderBy])

  return (
    <div>
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Select
              defaultValue="all"
              onValueChange={(e) => handleChangeCategories(e)}
            >
              <SelectTrigger className="w-full border-gray-800 bg-[#18181B] text-gray-300 sm:w-[180px]">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent className="border-gray-800 bg-[#18181B]">
                <SelectItem value="all" className="text-gray-300">
                  Todas Categorias
                </SelectItem>
                <SelectItem value="personal" className="text-gray-300">
                  Personal
                </SelectItem>
                <SelectItem value="agency" className="text-gray-300">
                  Agency
                </SelectItem>
                <SelectItem value="corporate" className="text-gray-300">
                  Corporate
                </SelectItem>
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
