'use client'

import { useEffect } from 'react'
import { useUserStore } from '@/store/user'
import type { ReactNode } from 'react'
import type { User } from '@/http/get-profile'

export default function Providers({
  user,
  children,
}: {
  user: User
  children: ReactNode
}) {
  useEffect(() => {
    useUserStore.setState({ user })
  }, [user])

  return <>{children}</>
}
