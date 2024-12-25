'use client'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Button } from './ui/button'

export default function BackButton() {
  const navigate = useRouter()

  function onBack() {
    navigate.back()
  }

  return (
    <Button
      variant="ghost"
      onClick={onBack}
      className="mb-6 text-purple-400 hover:bg-purple-900/20 hover:text-purple-300"
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      Voltar
    </Button>
  )
}
