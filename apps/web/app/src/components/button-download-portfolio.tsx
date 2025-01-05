'use client'

import { ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { getTemplateZip } from '@/http/download-template'
import { useUserStore } from '@/store/user'
import useStore from '@/store/useStore'

import { Button } from './ui/button'

type Inputs = {
  name: string
  email: string
  github: string
  linkedin: string
  apiGithub: string
  nameTemplate: string
}

export default function ButtonDownloadPortfolio({
  nameTemplate,
}: {
  nameTemplate: string
}) {
  const [showForm, setShowForm] = useState(false)

  const {
    register,
    handleSubmit,

    setValue,
  } = useForm<Inputs>()

  const user = useStore(useUserStore, (state) => state.user)

  useEffect(() => {
    if (user) {
      setValue('github', user.htmlUrl || '')
      setValue('apiGithub', user.reposUrl || '')
      setValue('nameTemplate', nameTemplate.toLowerCase())
    }
  }, [user, setValue])

  async function downloadTemplate(data: Inputs) {
    try {
      await getTemplateZip(data)
      setShowForm(false)
    } catch (error) {
      console.error('Falha ao baixar template:', error)
    }
  }

  function FormDownload() {
    return (
      <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.5)]">
        <div className="flex w-fit rounded-lg  bg-white p-5 ">
          <form
            onSubmit={handleSubmit(downloadTemplate)}
            className="space-y-4  text-black"
          >
            <div>
              <label className="mr-5" htmlFor="name">
                Nome:{' '}
              </label>
              <input
                {...register('name')}
                type="text"
                id="name"
                className="rounded-lg border p-2"
              />
            </div>

            <div>
              <label className="mr-5" htmlFor="email">
                Email:{' '}
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                className="rounded-lg border p-2"
              />
            </div>

            <div>
              <label className="mr-5" htmlFor="github">
                GitHub:{' '}
              </label>
              <input
                {...register('github')}
                type="text"
                id="github"
                readOnly
                className="rounded-lg border bg-gray-200 p-2"
              />
            </div>

            <div>
              <label className="mr-5" htmlFor="linkedin">
                LinkedIn:{' '}
              </label>
              <input
                {...register('linkedin')}
                type="text"
                id="linkedin"
                className="rounded-lg border p-2"
              />
            </div>

            <div>
              <label className="mr-5" htmlFor="apiGithub">
                API GitHub:{' '}
              </label>
              <input
                {...register('apiGithub')}
                type="text"
                id="apiGithub"
                readOnly
                className="rounded-lg border bg-gray-200 p-2"
              />
            </div>

            <button
              type="submit"
              className="rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 px-6 py-2 text-white hover:from-purple-700 hover:to-purple-900"
            >
              Baixar Portfólio
            </button>
          </form>
          <div>
            <button
              className="rounded-lg bg-red-500 px-3 py-1 text-white "
              type="button"
              onClick={() => setShowForm(false)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => {
          setShowForm(!showForm)
        }}
        className="flex items-center gap-2 border-0 bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:from-purple-700 hover:to-purple-900"
      >
        <ExternalLink className="h-4 w-4" />
        Baixar Portfólio
      </Button>

      {showForm && <FormDownload />}
    </div>
  )
}
