import { isAuthenticated } from '@/auth/auth'
import { redirect } from 'next/navigation'
import NavBar from '@/components/navbar'

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const responseCookieToken = await isAuthenticated()

  if (!responseCookieToken) {
    redirect('./../auth')
  }

  return (
    <div className="min-h-screen">
      <div className="flex min-h-screen">
        <aside className="fixed bottom-0  left-0 z-50 w-full bg-[#18181B] shadow-sm shadow-gray-800 md:top-0 md:h-full md:w-24">
          <NavBar />
        </aside>

        <main className="w-full pb-24 md:pb-0 md:pl-24">{children}</main>
      </div>
    </div>
  )
}
