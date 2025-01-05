'use client'

async function signOutGitHub() {
  try {
    const response = await fetch('/api/auth/sign-out')

    if (response.ok) {
      window.location.href = '/auth'
    } else {
      console.error('Erro ao deslogar:', response.statusText)
    }
  } catch (error) {
    console.error('Erro ao deslogar:', error)
  }
}

export default function FormSignOutGithub() {
  return (
    <form action={signOutGitHub} className=" w-full">
      <button type="submit" className="w-full  text-left">
        Sair
      </button>
    </form>
  )
}
