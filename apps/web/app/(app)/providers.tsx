'use client'

import type { ReactNode } from 'react'
import { useEffect } from 'react'

import type { User } from '@/http/get-profile'
import { useUserStore } from '@/store/user'

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
