'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { PlusCircle } from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from '@/hooks/use-toast'
import { createTemplate } from '@/http/create-template'
import { createSlug } from '@/utils/create-slug'

export default function DialogActionsTemplate() {
  const createTemplateFormSchema = z.object({
    name: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
    reference: z.string().min(3, 'Referência deve ter no mínimo 3 caracteres'),
    imgTemplate: z.string().url('Imagem deve ser uma URL válida'),
    slug: z.string().min(3, 'Slug deve ter no mínimo 3 caracteres'),
    types: z.string().min(3, 'Tipos deve ter no mínimo 3 caracteres'),
    urlGithub: z.string().url('URL do Github deve ser uma URL válida'),
    urlDemo: z.string().url('URL do Demo deve ser uma URL válida'),
  })

  type createTemplateFormData = z.infer<typeof createTemplateFormSchema>

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<createTemplateFormData>({
    resolver: zodResolver(createTemplateFormSchema),
  })
  const watchName = watch('name')

  useEffect(() => {
    if (watchName) {
      setValue('slug', createSlug(watchName))
    }
  }, [watchName])

  async function handleCreate(data: createTemplateFormData) {
    console.log(data)
    try {
      await createTemplate({
        template: {
          name: data.name,
          slug: data.slug,
          reference: data.reference,
          imgTemplate: data.imgTemplate,
          urlGithub: data.urlGithub,
          urlDemo: data.urlDemo,
          types: data.types.split(',').map((type) => type.trim()),
        },
      })
      toast({
        title: 'Template criado com sucesso',
        description: 'O template foi criado com sucesso.',
      })
    } catch (error) {
      console.log(error)
      toast({
        variant: 'destructive',
        title: 'Erro ao criar template',
        description: 'Ocorreu um erro ao criar o template.',
      })
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-purple-500 text-white hover:bg-purple-600"
          onClick={() => console.log('Oi')}
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Novo Template
        </Button>
      </DialogTrigger>
      <DialogContent className="border-gray-800 bg-[#18181B] text-white">
        <form onSubmit={handleSubmit(handleCreate)}>
          <DialogHeader>
            <DialogTitle>Criar Novo Template</DialogTitle>
            <DialogDescription className="text-gray-400">
              Preencha os dados para criar um novo template
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                // value={formData.name}
                {...register('name', { required: true })}
                // onChange={(e) =>
                //   setFormData({ ...formData, name: e.target.value })
                // }
                className="border-gray-700 bg-zinc-900 text-white"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>

            <div>
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                // value={formData.slug}
                disabled
                className="border-gray-700 bg-zinc-900 text-white"
                {...register('slug', { required: true })}
              />
              {errors.slug && (
                <span className="text-red-500">{errors.slug.message}</span>
              )}
            </div>

            <div>
              <Label htmlFor="urlGithub">URL do Github</Label>
              <Input
                id="urlGithub"
                // value={formData.urlGithub}
                // onChange={(e) =>
                //   setFormData({ ...formData, urlGithub: e.target.value })
                // }
                className="border-gray-700 bg-zinc-900 text-white"
                {...register('urlGithub', { required: true })}
              />
              {errors.urlGithub && (
                <span className="text-red-500">{errors.urlGithub.message}</span>
              )}
            </div>

            <div>
              <Label htmlFor="imgTemplate">Imagem Github</Label>
              <Input
                id="imgTemplate"
                // value={formData.imgTemplate}
                // onChange={(e) =>
                //   setFormData({ ...formData, imgTemplate: e.target.value })
                // }
                className="border-gray-700 bg-zinc-900 text-white"
                {...register('imgTemplate', { required: true })}
              />
              {errors.imgTemplate && (
                <span className="text-red-500">
                  {errors.imgTemplate.message}
                </span>
              )}
            </div>

            <div>
              <Label htmlFor="urlDemo">URL do Demo</Label>
              <Input
                id="urlDemo"
                // value={formData.urlDemo}
                // onChange={(e) =>
                //   setFormData({ ...formData, urlDemo: e.target.value })
                // }
                className="border-gray-700 bg-zinc-900 text-white"
                {...register('urlDemo', { required: true })}
              />
              {errors.urlDemo && (
                <span className="text-red-500">{errors.urlDemo.message}</span>
              )}
            </div>

            <div>
              <Label htmlFor="reference">Referência</Label>
              <Input
                id="reference"
                // value={formData.reference}
                // onChange={(e) =>
                //   setFormData({ ...formData, reference: e.target.value })
                // }
                className="border-gray-700 bg-zinc-900 text-white"
                {...register('reference', { required: true })}
              />
              {errors.reference && (
                <span className="text-red-500">{errors.reference.message}</span>
              )}
            </div>
            <div>
              <Label htmlFor="types">Tipos (separados por vírgula)</Label>
              <Input
                id="types"
                // value={formData.types}
                // onChange={(e) =>
                //   setFormData({ ...formData, types: e.target.value })
                // }
                className="border-gray-700 bg-zinc-900 text-white"
                {...register('types', { required: true })}
              />
              {errors.types && (
                <span className="text-red-500">{errors.types.message}</span>
              )}
            </div>
          </div>
          <DialogFooter>
            {/* <Button
            variant="outline"
            onClick={() => setIsCreateOpen(false)}
            className="border-gray-700 text-gray-300 hover:border-gray-600"
          >
            Cancelar
          </Button> */}
            <Button
              type="submit"
              className="mt-5 bg-purple-500 text-white hover:bg-purple-600"
            >
              Criar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
