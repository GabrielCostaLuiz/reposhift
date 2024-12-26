'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AiOutlineLike } from 'react-icons/ai'

import { toast } from '@/hooks/use-toast'
import { updateLikeTemplate } from '@/http/update-like-template'
import { useTemplatesStore } from '@/store/templates'
import { useUserStore } from '@/store/user'

import { Button } from './ui/button'

export default function ButtonLike({
  likes,
  idPortfolio,
}: {
  likes: number
  idPortfolio: string
}) {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(likes)

  const {
    refreshTemplates,
    addTemplateLiked,
    removeTemplateLiked,
    templatesLikeds,
  } = useTemplatesStore()
  const { user, updateTemplateLiked } = useUserStore()
  const pathName = usePathname()

  async function handleLike() {
    try {
      const {
        method,
        likes: updatedLikes,
        message,
      } = await updateLikeTemplate({
        templateId: idPortfolio,
      })

      setLikeCount(updatedLikes)

      setIsLiked(method === 'add')

      updateTemplateLiked(idPortfolio)

      toast({
        variant: 'default',
        title: message,
        description:
          method === 'add'
            ? 'Obrigado por dar seu like'
            : 'Você retirou o seu like',
      })

      if (method === 'add') {
        addTemplateLiked(idPortfolio)
      } else {
        removeTemplateLiked(idPortfolio)
      }

      await refreshTemplates(pathName)
    } catch (error) {
      toast({
        title: 'Erro ao dar like',
        description: 'Tente novamente mais tarde',
        variant: 'destructive',
      })
    }
  }

  useEffect(() => {
    if (user) {
      setIsLiked(templatesLikeds.includes(idPortfolio))
    }
  }, [user, templatesLikeds, idPortfolio])

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleLike}
      className={`w-fit bg-black/50 p-2 backdrop-blur-sm hover:bg-black/70 ${
        isLiked ? 'fill-purple-500 text-purple-500' : 'text-gray-400'
      }`}
    >
      <AiOutlineLike />
      <span className="text-sm">{likeCount}</span>
    </Button>
  )
}
