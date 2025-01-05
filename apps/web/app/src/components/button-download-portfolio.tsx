'use client'

import { ExternalLink, Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { toast } from '@/hooks/use-toast'
import { getTemplateZip } from '@/http/download-template'
import { useUserStore } from '@/store/user'
import useStore from '@/store/useStore'

import { Button } from './ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'

type Inputs = {
  name: string
  email: string
  github: string
  linkedin: string
  apiGithub: string
  nameTemplate: string
}

export default function ButtonDownloadPortfolio({
  nameTemplate,
}: {
  nameTemplate: string
}) {
  const [showForm, setShowForm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, setValue } = useForm<Inputs>()

  const user = useStore(useUserStore, (state) => state.user)

  useEffect(() => {
    if (user) {
      setValue('github', user.htmlUrl || '')
      setValue('apiGithub', user.reposUrl || '')
      setValue('nameTemplate', nameTemplate.toLowerCase())
    }
  }, [user, setValue, nameTemplate])

  async function downloadTemplate(data: Inputs) {
    setIsLoading(true)
    try {
      await getTemplateZip(data)
      toast({
        variant: 'default',
        title: 'Download iniciado!',
        description: 'Seu template começará a ser baixado em instantes.',
      })
      setShowForm(false)
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erro ao baixar',
        description: 'Não foi possível baixar o template. Tente novamente.',
      })
      console.error('Falha ao baixar template:', error)
    } finally {
      setIsLoading(false)
    }
  }

  function FormDownload() {
    return (
      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="max-w-md border-zinc-800 bg-zinc-900 text-gray-100">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-purple-400">
              Download do Template
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit(downloadTemplate)} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm text-gray-300">
                  Nome
                </Label>
                <Input
                  {...register('name')}
                  id="name"
                  required
                  className="border-zinc-800 bg-zinc-800/50 text-gray-100 placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-gray-300">
                  Email
                </Label>
                <Input
                  {...register('email')}
                  type="email"
                  id="email"
                  required
                  className="border-zinc-800 bg-zinc-800/50 text-gray-100 placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="github" className="text-sm text-gray-300">
                  GitHub
                </Label>
                <Input
                  {...register('github')}
                  id="github"
                  readOnly
                  className="border-zinc-800 bg-zinc-800 text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedin" className="text-sm text-gray-300">
                  LinkedIn
                </Label>
                <Input
                  {...register('linkedin')}
                  id="linkedin"
                  required
                  className="border-zinc-800 bg-zinc-800/50 text-gray-100 placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500"
                  placeholder="https://linkedin.com/in/seu-perfil"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="apiGithub" className="text-sm text-gray-300">
                  API GitHub
                </Label>
                <Input
                  {...register('apiGithub')}
                  id="apiGithub"
                  readOnly
                  className="border-zinc-800 bg-zinc-800 text-gray-400"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:from-purple-700 hover:to-purple-900 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Processando...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  <span>Baixar Template</span>
                </div>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setShowForm(true)}
        className="flex items-center gap-2 border-0 bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:from-purple-700 hover:to-purple-900"
      >
        <ExternalLink className="h-4 w-4" />
        Baixar Template
      </Button>

      {showForm && <FormDownload />}
    </div>
  )
}
