'use client'

import Link from 'next/link'
import ButtonFavorite from './buttonFavorite'
import ButtonLike from './buttonLike'
import type { Template } from './portfolio-grid'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'

export default function PortfolioCard({ portfolio }: { portfolio: Template }) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden border-gray-800 bg-zinc-900 transition-colors hover:bg-zinc-900/80">
      <CardHeader className="relative p-0">
        <img
          src={portfolio.imgTemplate}
          alt={`imagem do portfolio ${portfolio.name}`}
          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </CardHeader>

      <CardContent className="flex-1 space-y-4 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 text-base font-semibold capitalize text-gray-100 sm:text-lg">
            {portfolio.name}
          </h3>
          <div className="flex shrink-0 gap-1.5">
            <ButtonFavorite idPortfolio={portfolio.id} />
            <ButtonLike likes={portfolio.likes} idPortfolio={portfolio.id} />
          </div>
        </div>

        <div className="flex flex-col gap-2 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <span className="line-clamp-1 capitalize">
            por {portfolio.reference}
          </span>
          <span className="shrink-0">
            {new Date(portfolio.createdAt).toLocaleDateString()}
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-4 p-4 pt-0">
        <div className="flex flex-wrap gap-1.5">
          {portfolio.types.map((type) => (
            <Badge
              key={type}
              className="bg-purple-500/10 px-2 py-0.5 text-xs capitalize text-purple-400 transition-colors hover:bg-purple-500/20"
            >
              {type}
            </Badge>
          ))}
        </div>

        <Button
          asChild
          variant="outline"
          className="w-full border-gray-700 text-sm text-gray-300 transition-colors hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400"
        >
          <Link href={`/portfolios/${portfolio.slug}`}>Ver Detalhes</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}