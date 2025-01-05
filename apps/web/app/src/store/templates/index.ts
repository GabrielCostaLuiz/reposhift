/* eslint-disable prettier/prettier */
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { getTemplates } from '@/http/get-templates'
import { getTemplateFavorite } from '@/http/get-templates-favorite'

interface TemplateApiResponse {
  id: string
  name: string
  slug: string
  reference: string
  imgTemplate: string
  urlGithub: string
  likes: number
  urlDemo: string
  types: string[]
  techs: string[]
  description: string
  createdAt: string
  updatedAt: string
}

const getAllTemplates = async () => {
  const response = await getTemplates()
  const templates: TemplateApiResponse[] = response.templates

  templates.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
  return templates
}

const getAllTemplatesFavorite = async () => {
  const response = await getTemplateFavorite()
  const templates: TemplateApiResponse[] = response.templates


  templates.sort((a, b) => b.likes - a.likes)

  return templates
}


interface States {
  templates: TemplateApiResponse[]
  templatesFavorites: string[]
  templatesLikeds: string[]
}

interface Actions {
  setTemplates: (templates: TemplateApiResponse[]) => void
  refreshTemplates: (params?: string | undefined) => Promise<void>
  addTemplateFavorite: (id: string) => void
  removeTemplateFavorite: (id: string) => void
  addTemplateLiked: (id: string) => void
  removeTemplateLiked: (id: string) => void
}

type Store = States & Actions


export const useTemplatesStore = create<Store>()(
  persist(
    (set) => ({
      templates: [],
      setTemplates: (templates: TemplateApiResponse[]) => {
        set({ templates })
      },
      refreshTemplates: async (params: string | undefined) => {
        if (params === '/favoritos') {
          const templates = await getAllTemplatesFavorite()

          set({ templates })
        } else {
          const templates = await getAllTemplates()

          set({ templates })
        }
      },
      templatesFavorites: [],
      templatesLikeds: [],
      addTemplateFavorite: (id: string) => {
        set((state) => ({
          templatesFavorites: [...state.templatesFavorites, id],
        }))
      },
      removeTemplateFavorite: (id: string) => {
        set((state) => ({
          templatesFavorites: state.templatesFavorites.filter(
            (templateId) => templateId !== id
          ),
        }))
      },
      addTemplateLiked: (id: string) => {
        set((state) => ({
          templatesLikeds: [...state.templatesLikeds, id],
        }))
      },
      removeTemplateLiked: (id: string) => {
        set((state) => ({
          templatesLikeds: state.templatesLikeds.filter(
            (templateId) => templateId !== id
          ),
        }))
      },
    }),
    {
      name: 'template-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

