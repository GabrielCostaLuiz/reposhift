'use client'
import React, { Suspense, useEffect, useState } from 'react'
import { PlusCircle, Pencil, Trash2, Download, Heart } from 'lucide-react'
import { format } from 'date-fns'
import Link from 'next/link'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createSlug } from '@/utils/create-slug'
import { createTemplate } from '@/http/create-template'
import { useToast } from '@/hooks/use-toast'

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
  createdAt: string
  updatedAt: string
}

export function TemplateCard({ templates }: { templates: Template[] }) {
    // const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  )
  const [formData, setFormData] = useState({
    name: '',
    reference: '',
    imgTemplate: '',
    slug: '',
    types: '',
    urlGithub: '',
    urlDemo: '',
  })

  // const { toast } = useToast()
 
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {templates.map((template) => (
        <Card key={template.id} className="group border-gray-800 bg-[#18181B]">
          <CardHeader className="relative p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white capitalize">
                {template.name}
              </h3>
              <div className="flex space-x-2">
                <Button
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
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setSelectedTemplate(template)
                    setIsDeleteOpen(true)
                  }}
                  className="h-8 w-8 bg-black/50 text-gray-400 hover:bg-black/70"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="mb-4 flex items-center justify-between text-sm text-gray-400">
              <span className='capitalize'>Ref: {template.reference}</span>
              <span>{format(new Date(template.createdAt), 'dd/MM/yyyy')}</span>
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
                <Heart className="h-4 w-4" />
                <span>{template.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                <span>32</span>
              </div>
            </div>
            <Button
              variant="outline"
              className="border-gray-700 text-gray-300 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400"
            >
              <Link href={`/templates/${template.slug}`}>Ver Template</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
