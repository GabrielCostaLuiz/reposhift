'use client'

import { Heart } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { toast } from '@/hooks/use-toast'
import { updateFavoriteTemplate } from '@/http/update-favorite-template'
import { useTemplatesStore } from '@/store/templates'
import { useUserStore } from '@/store/user'

import { Button } from './ui/button'

export default function ButtonFavorite({
  idPortfolio,
}: {
  idPortfolio: string
}) {
  const [isFavorite, setIsFavorite] = useState(false)

  const {
    refreshTemplates,
    addTemplateFavorite,
    removeTemplateFavorite,
    templatesFavorites,
  } = useTemplatesStore()
  const { user, updateTemplateFavorite } = useUserStore()
  const pathName = usePathname()

  async function handleFavorite() {
    try {
      const { method, message } = await updateFavoriteTemplate({
        templateId: idPortfolio,
      })

      setIsFavorite(method === 'add')

      updateTemplateFavorite(idPortfolio)

      toast({
        variant: 'default',
        title: message,
        description:
          method === 'add'
            ? 'Obrigado por dar seu favorito'
            : 'Você retirou o seu favorito',
      })

      if (method === 'add') {
        addTemplateFavorite(idPortfolio)
      } else {
        removeTemplateFavorite(idPortfolio)
      }

      await refreshTemplates(pathName)
    } catch (error) {
      toast({
        title: 'Erro ao dar favorito',
        description: 'Tente novamente mais tarde',
        variant: 'destructive',
      })
    }
  }

  useEffect(() => {
    console.log(user)
    if (user) {
      setIsFavorite(templatesFavorites.includes(idPortfolio))
    }
  }, [user, templatesFavorites, idPortfolio])

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleFavorite}
      className="bg-black/50 backdrop-blur-sm hover:bg-black/70"
    >
      <Heart
        className={
          isFavorite ? 'fill-purple-500 text-purple-500' : 'text-gray-400'
        }
      />
    </Button>
  )
}
