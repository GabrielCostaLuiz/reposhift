import { redirect } from 'next/navigation'

import { auth, isAuthenticated } from '@/auth-user/auth'
import Footer from '@/components/footer'
import NavBar from '@/components/navbar'
import { Toaster } from '@/components/ui/toaster'

import Providers from './providers'

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const responseCookieToken = await isAuthenticated()

  if (!responseCookieToken) {
    return redirect('./../auth')
  }

  const { user } = await auth()

  console.log(user)

  return (
    <Providers user={user}>
      <div className="min-h-screen">
        <div className=" min-h-screen">
          <aside className="fixed bottom-0  left-0 z-50 w-full bg-[#18181B] shadow-sm shadow-gray-800 md:top-0 md:h-full md:w-24">
            <NavBar />
          </aside>
          <div className="md:pl-24">
            <main className="w-full md:pb-0 ">{children}</main>
            <Toaster />

            <Footer />
          </div>
        </div>
      </div>
    </Providers>
  )
}
