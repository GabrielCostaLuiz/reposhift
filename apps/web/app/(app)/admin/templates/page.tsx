import React, { Suspense } from 'react'
import { PlusCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { createSlug } from '@/utils/create-slug'
import { createTemplate } from '@/http/create-template'
import { useToast } from '@/hooks/use-toast'
import { getTemplates } from '@/http/get-templates'
import { TemplateCard } from '@/components/template-card'
import { LuLoaderCircle } from 'react-icons/lu'
import { Skeleton } from '@/components/ui/skeleton'
import DialogActionsTemplate from '@/components/dialog-actions-template'
import LoadingPortfolios from '@/components/loading-portfolios'

export default async function AdminTemplates() {
  // const [allTemplates, setAllTemplates] = useState<Template[]>([
  //   // {
  //   //   id: '1',
  //   //   name: 'Modern Portfolio',
  //   //   slug: 'modern-portfolio',
  //   //   imgTemplate: 'alala',
  //   //   urlGithub: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  //   //   urlDemo: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  //   //   reference: 'REF001',
  //   //   likes: 42,
  //   //   types: ['Personal', 'Creative'],
  //   //   createdAt: new Date().toISOString(),
  //   //   updatedAt: new Date().toISOString(),
  //   // },
  // ])

  // const [isCreateOpen, setIsCreateOpen] = useState(false)
  // const [isEditOpen, setIsEditOpen] = useState(false)
  // const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  // const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
  //   null
  // )
  // const [formData, setFormData] = useState({
  //   name: '',
  //   reference: '',
  //   imgTemplate: '',
  //   slug: '',
  //   types: '',
  //   urlGithub: '',
  //   urlDemo: '',
  // })

  // const { toast } = useToast()

  // const handleCreate = async () => {
  //   // Handle create logic here
  //   try {
  //     await createTemplate({
  //       template: {
  //         name: formData.name,
  //         slug: formData.slug,
  //         reference: formData.reference,
  //         imgTemplate: formData.imgTemplate,
  //         urlGithub: formData.urlGithub,
  //         urlDemo: formData.urlDemo,
  //         types: formData.types.split(',').map((type) => type.trim()),
  //       },
  //     })
  //     toast({
  //       title: 'Template criado com sucesso',
  //       description: 'O template foi criado com sucesso.',
  //     })

  //     setIsCreateOpen(false)
  //   } catch (error) {
  //     toast({
  //       variant: 'destructive',
  //       title: 'Erro ao criar template',
  //       description: 'Ocorreu um erro ao criar o template.',
  //     })
  //   }
  // }

  // const handleEdit = () => {
  //   // Handle edit logic here
  //   setIsEditOpen(false)
  // }

  // const handleDelete = () => {
  //   // Handle delete logic here
  //   setIsDeleteOpen(false)
  // }

  // useEffect(() => {
  //   setFormData({
  //     ...formData,
  //     slug: createSlug(formData.name),
  //   })
  // }, [formData.name])

  // useEffect(() => {
  //   const fetchTemplates = async () => {
  //     const { templates } = await getTemplates()
  //     console.log(templates)
  //     setAllTemplates(templates)
  //   }
  //   fetchTemplates()
  // }, [])

  const { templates } = await getTemplates()

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Gerenciar Templates</h1>

          <DialogActionsTemplate />
        </div>

        <Suspense fallback={<LoadingPortfolios />}>
          <TemplateCard templates={templates} />
        </Suspense>
      </div>

      {/* <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <DialogContent className="border-gray-800 bg-[#18181B] text-white">
          <DialogHeader>
            <DialogTitle>Confirmar Exclusão</DialogTitle>
            <DialogDescription className="text-gray-400">
              Tem certeza que deseja excluir este template? Esta ação não pode
              ser desfeita.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteOpen(false)}
              className="border-gray-700 text-gray-300 hover:border-gray-600"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleDelete}
              variant="destructive"
              className="bg-red-500 hover:bg-red-600"
            >
              Excluir
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog> */}
    </div>
  )
}
