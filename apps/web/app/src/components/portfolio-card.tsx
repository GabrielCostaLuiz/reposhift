'use client'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Button } from './ui/button'
import { Heart } from 'lucide-react'
import { Badge } from './ui/badge'
import { useState } from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { FaFileDownload } from 'react-icons/fa'
import Link from 'next/link'
import type { PortfoliosProps } from './portfolio-grid'

export default function PortfolioCard({
  portfolio,
}: {
  portfolio: PortfoliosProps
}) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isLike, setIsLike] = useState(false)

  return (
    <Card className="group overflow-hidden border-gray-800 bg-[#18181B]">
      <CardHeader className="relative p-0">
        <img
          src={portfolio.image}
          alt={portfolio.title}
          className="h-48 w-full object-cover transition-transform group-hover:scale-105 sm:h-56 md:h-64"
        />
        <div className="absolute right-2 top-2 space-x-2  sm:right-4 sm:top-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsFavorite(!isFavorite)}
            className="bg-black/50 backdrop-blur-sm hover:bg-black/70"
          >
            <Heart
              className={
                isFavorite ? 'fill-purple-500 text-purple-500' : 'text-gray-400'
              }
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsLike(!isLike)}
            className={`w-fit bg-black/50 p-2 backdrop-blur-sm hover:bg-black/70 ${
              isLike ? 'fill-purple-500 text-purple-500' : 'text-gray-400'
            }`}
          >
            <AiOutlineLike />
            <span className="text-sm ">{portfolio.like}</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className={`w-fit bg-black/50 p-2 text-purple-500 backdrop-blur-sm hover:bg-black/70`}
          >
            <FaFileDownload />
            <span className="text-sm ">20</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <h3 className="mb-2 line-clamp-1 text-lg font-semibold text-white sm:text-xl">
          {portfolio.title}
        </h3>
        <div className="flex items-center justify-between text-xs text-gray-400 sm:text-sm">
          <span className="line-clamp-1">por {portfolio.creator}</span>
          <span>{new Date(portfolio.date).toLocaleDateString()}</span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-stretch justify-between gap-3 p-4 pt-0 sm:flex-row sm:items-center sm:gap-0 sm:p-6">
        <Badge className="bg-purple-500/10 text-center text-purple-400 hover:bg-purple-500/20 sm:text-left">
          {portfolio.category}
        </Badge>
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
