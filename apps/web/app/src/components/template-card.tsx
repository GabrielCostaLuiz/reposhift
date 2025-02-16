'use client'
import { format } from 'date-fns'
import { Trash2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BiLike } from 'react-icons/bi'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { toast } from '@/hooks/use-toast'
import { deleteTemplate } from '@/http/delete-template'

interface Template {
  id: string
  name: string
  slug: string
  reference: string
  imgTemplate: string
  urlGithub: string
  urlDemo: string
  likes: number
  types: string[]
  techs: string[]
  description: string
  createdAt: string
  updatedAt: string
}

export function TemplateCard({ templates }: { templates: Template[] }) {
  const route = useRouter()

  async function handleDelete(templateId: string) {
    try {
      await deleteTemplate({
        templateId,
      })

      toast({
        title: 'Template deleted',
        description: 'The template has been deleted',
      })

      route.refresh()
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong',
        variant: 'destructive',
      })
    }
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {templates.length > 0 ? (
        templates.map((template) => (
          <Card
            key={template.id}
            className="group border-gray-800 bg-[#18181B]"
          >
            <CardHeader className="relative p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold capitalize text-white">
                  {template.name}
                </h3>
                <div className="flex space-x-2">
                  {/* <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setSelectedTemplate(template)
                    setIsEditOpen(true)
                  }}
                  className="h-8 w-8 bg-black/50 text-gray-400 hover:bg-black/70"
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(template.id)}
                    className="h-8 w-8 bg-black/50 text-gray-400 hover:bg-black/70"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="mb-4 flex items-center justify-between text-sm text-gray-400">
                <span className="capitalize">Ref: {template.reference}</span>
                <span>
                  {format(new Date(template.createdAt), 'dd/MM/yyyy')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {template.types.map((type) => (
                  <Badge
                    key={`${template.id}-${type}`}
                    className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20"
                  >
                    {type}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4 text-gray-400">
                <div className="flex items-center gap-1">
                  <BiLike className="h-4 w-4" />
                  <span>{template.likes}</span>
                </div>
                {/* <div className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  <span>32</span>
                </div> */}
              </div>
              <Button
                variant="outline"
                className="border-gray-700 text-gray-300 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400"
              >
                <Link href={`/portfolios/${template.slug}`}>Ver Template</Link>
              </Button>
            </CardFooter>
          </Card>
        ))
      ) : (
        <div className="">
          <p className="text-gray-400">Nenhum template encontrado</p>
        </div>
      )}
    </div>
  )
}
