import React, { Suspense } from 'react'

import DialogActionsTemplate from '@/components/dialog-actions-template'
import LoadingPortfolios from '@/components/loading-portfolios'
import { TemplateCard } from '@/components/template-card'
import { getTemplates } from '@/http/get-templates'

export default async function AdminTemplates() {
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
