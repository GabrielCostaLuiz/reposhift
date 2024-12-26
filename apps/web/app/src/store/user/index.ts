import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import type { User } from '@/http/get-profile'

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
    (set) => ({
      user: null,
      updateUser: (user: User) => {
        set({ user })
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
