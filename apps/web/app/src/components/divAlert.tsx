'use client'
import { useState } from 'react'

export default function AlertInitial() {
  const [open, setOpen] = useState(true)

  // toast({
  //   title: 'Aviso importante!',
  //   description:
  //     'Este site está hospedado em plataformas gratuitas, que podem entrar em modo de "sleep" após algum tempo de inatividade. Se alguma requisição falhar, aguarde 2 minutos e tente novamente. Além disso, por estar em um plano gratuito, podem ocorrer lentidões ou falhas devido à limitação das plataformas.',
  //   variant: 'default',
  // })

  return (
    <div
      className={`${!open && 'hidden opacity-0 '} fixed top-0 z-50 flex h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]`}
    >
      <div className="mx-auto max-w-sm rounded-lg bg-white p-6 text-black shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">Aviso importante</h2>
        <p className="mb-6 text-gray-700">
          Este site está hospedado em plataformas gratuitas, que podem entrar em
          modo de "sleep" após algum tempo de inatividade. Se alguma requisição
          falhar, aguarde 2 minutos e tente novamente. Além disso, por estar em
          um plano gratuito, podem ocorrer lentidões ou falhas devido à
          limitação das plataformas.
        </p>
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          onClick={() => {
            setOpen(false)
          }}
        >
          Entendido
        </button>
      </div>
    </div>
  )
}
