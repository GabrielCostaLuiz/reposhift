import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import type { User } from '@/http/get-profile'

interface States {
  user: User | null
}

interface Actions {
  updateUser: (user: User) => void
  updateTemplateLiked: (templateId: string) => void
  updateTemplateFavorite: (templateId: string) => void
}

type Store = States & Actions

export const useUserStore = create<Store>()(
  persist(
    (set) => ({
      user: null,
      updateUser: (user: User) => {
        set({ user })
      },
      updateTemplateLiked: (templateId: string) => {
        set((state) => {
          if (!state.user) return state

          const isLiked = state.user.templatesLiked.includes(templateId)

          const updatedTemplatesLiked = isLiked
            ? state.user.templatesLiked.filter((id) => id !== templateId)
            : [...state.user.templatesLiked, templateId]

          return {
            user: {
              ...state.user,
              templatesLiked: updatedTemplatesLiked,
            },
          }
        })
      },
      updateTemplateFavorite: (templateId: string) => {
        set((state) => {
          if (!state.user) return state

          const isFavorite = state.user.templatesFavorite.includes(templateId)

          const updatedTemplatesFavorite = isFavorite
            ? state.user.templatesFavorite.filter((id) => id !== templateId)
            : [...state.user.templatesFavorite, templateId]

          return {
            user: {
              ...state.user,
              templatesFavorite: updatedTemplatesFavorite,
            },
          }
        })
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
