import Link from 'next/link'
import { redirect } from 'next/navigation'
import { IoMdArrowRoundUp } from 'react-icons/io'
import { IoRocket } from 'react-icons/io5'
import { MdSignalWifiStatusbar4Bar } from 'react-icons/md'
import { TbBrandGithubFilled } from 'react-icons/tb'

import { isAuthenticated } from '@/auth-user/auth'
import { Button } from '@/components/ui/button'

import { signInWithGithub } from './actions'

export default async function Auth() {
  const responseCookieToken = await isAuthenticated()

  if (responseCookieToken) {
    redirect('/')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#18181B] text-center text-white">
      <div className="min-h-fit space-y-10">
        <h1 className=" text-4xl font-bold">RepoShift Auth</h1>

        <form action={signInWithGithub} className="space-y-7">
          <Button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-white p-4 text-black hover:scale-105 hover:bg-gray-200 "
          >
            <TbBrandGithubFilled size={24} /> Login com GitHub
          </Button>

          <Button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-purple-700 p-4 text-white hover:scale-105 hover:bg-purple-800 "
            asChild
          >
            <Link
              href="/jornada"
              className="flex w-full items-center justify-center gap-2"
            >
              <IoRocket size={24} /> Jornada
            </Link>
          </Button>

          <div>
            <Button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-green-700 p-4 text-white hover:scale-105 hover:bg-green-800 "
              asChild
            >
              <Link
                href="/status"
                className="flex w-full items-center justify-center gap-2"
              >
                <MdSignalWifiStatusbar4Bar size={24} /> Status
              </Link>
            </Button>
            <div className="mt-3 flex flex-col items-center justify-center gap-1">
              <IoMdArrowRoundUp size={24} />
              <p className="font-bold">Consulte antes de entrar</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
