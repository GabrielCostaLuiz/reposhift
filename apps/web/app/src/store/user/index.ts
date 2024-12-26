import type { User } from '@/http/get-profile'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// State types
interface States {
  user: User | null
}

interface Actions {
  updateUser: (user: User) => void
}

type Store = States & Actions

// useCounterStore
export const useUserStore = create<Store>()(
  persist(
    (set, get) => ({
      user: null,
      updateUser: (user: User) => {
        set({ user })
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
