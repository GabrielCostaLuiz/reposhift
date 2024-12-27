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
    <Card className="group overflow-hidden border-gray-800 bg-[#18181B]">
      <CardHeader className="relative p-0">
        <img
          src={portfolio.imgTemplate}
          alt={`imagem do portfolio ${portfolio.name}`}
          className="h-48 w-full object-cover transition-transform group-hover:scale-105 sm:h-56 md:h-64"
        />
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="mb-2 line-clamp-1 text-lg font-semibold capitalize text-white sm:text-xl">
            {portfolio.name}
          </h3>
          <div className=" space-x-2">
            <ButtonFavorite idPortfolio={portfolio.id} />
            <ButtonLike likes={portfolio.likes} idPortfolio={portfolio.id} />

            {/* <Button
              variant="ghost"
              size="icon"
              className={`w-fit bg-black/50 p-2 text-purple-500 backdrop-blur-sm hover:bg-black/70`}
            >
              <FaFileDownload />
              <span className="text-sm ">20</span>
            </Button> */}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-400 sm:text-sm">
          <span className="line-clamp-1 capitalize">
            por {portfolio.reference}
          </span>
          <span>{new Date(portfolio.createdAt).toLocaleDateString()}</span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-stretch justify-between gap-3 p-4 pt-0 sm:flex-row sm:items-center sm:gap-0 sm:p-6">
        <div className="space-x-2">
          {portfolio.types.map((type) => (
            <Badge
              key={type}
              className="bg-purple-500/10 text-center capitalize text-purple-400 hover:bg-purple-500/20 sm:text-left"
            >
              {type}
            </Badge>
          ))}
        </div>

        <Button
          asChild
          variant="outline"
          className="w-full border-gray-700 text-gray-300 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400 sm:w-auto"
        >
          <Link href={`/portfolios/${portfolio.slug}`}>Ver Detalhes</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
