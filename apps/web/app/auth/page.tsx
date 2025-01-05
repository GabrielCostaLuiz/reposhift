import { redirect } from 'next/navigation'
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

        <form action={signInWithGithub}>
          <Button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-white p-4 text-black hover:bg-gray-200"
          >
            <TbBrandGithubFilled size={24} /> Login com GitHub
          </Button>
        </form>
      </div>
    </div>
  )
}
