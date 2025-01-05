'use client'
import { env } from '@saas/env'
import Link from 'next/link'
import React from 'react'
import { BiLoaderAlt } from 'react-icons/bi'
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'
import useSWR from 'swr'

interface Database {
  version: string
  max_connections: number
  open_connections: number
}

interface Dependencies {
  database: Database
}

interface DataProps {
  name: string
  status: string
  message: string
  updated_at: Date
  dependencies: Dependencies
}

interface ErrorResponse {
  name: string
  message: string
  action: string
  status: number
}

async function fetcher(key: string) {
  try {
    const response = await fetch(key)

    if (!response.ok) {
      throw new Error('Erro de requisição', {
        cause: {
          status: response.status,
          statusText: response.statusText,
        },
      })
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
    const data: DataProps = await response.json()

    if (
      !data ||
      typeof data.name !== 'string' ||
      typeof data.status !== 'string'
    ) {
      throw new Error('Dados inválidos da API')
    }

    return data
  } catch (error: unknown) {
    if (error instanceof Error && error.cause) {
      const errorResponse: ErrorResponse = {
        name: error.name,
        message: error.message,
        action: 'Tente novamente mais tarde',
        status: (error.cause as { status?: number }).status || 500,
      }
      throw errorResponse
    }
  }
}

const BackendStatusPage = () => {
  const url = env.NEXT_PUBLIC_API_URL
  const { data, error, isLoading } = useSWR(
    // 'http://localhost:3333/status',
    `${url}/status`,

    fetcher,
    {
      refreshInterval: 10000,
    },
  )

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'online':
        return <FaCheckCircle className="text-green-500" />
      case 'offline':
        return <FaExclamationTriangle className="text-red-500" />
      default:
        return <BiLoaderAlt className="animate-spin text-yellow-500" />
    }
  }

  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date())

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12">
      <div className="w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-xl">
        {!isLoading && error && (
          <div className="mb-4 flex items-center space-x-3 border-l-4 border-yellow-500 bg-yellow-100 p-4">
            <FaExclamationTriangle className="text-yellow-600" />
            <div>
              <p className="font-medium text-yellow-700">
                {error.message || 'Erro desconhecido'}
              </p>
              <p className="text-sm text-yellow-600">
                {error.action || 'Tente novamente mais tarde.'}
              </p>
              <br />
              <p className="mt-1 text-sm text-yellow-600">
                Tentando novamente a cada 10 segundos...
              </p>
            </div>
          </div>
        )}

        <div className="text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-800">
            Status do Backend
          </h1>
          <p className="text-gray-500">Verifique a saúde dos nossos serviços</p>
        </div>

        <div className="space-y-4">
          {data ? (
            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4 shadow-sm">
              <div className="flex items-center space-x-3">
                {getStatusIcon(data.status.toString())}
                <span className="font-medium text-gray-700">{data.name}</span>
              </div>
              <span
                className={`
                  text-sm font-semibold uppercase
                  ${
                    data.status === 'online'
                      ? 'text-green-600'
                      : data.status === 'offline'
                        ? 'text-red-600'
                        : 'text-yellow-600'
                  }
                `}
              >
                {data.status === 'loading'
                  ? 'Verificando...'
                  : data.status === 'online'
                    ? 'Online'
                    : 'Offline'}
              </span>
            </div>
          ) : !data && !isLoading ? (
            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4 shadow-sm">
              <div className="flex items-center space-x-3">
                {getStatusIcon('offline')}
                <span className="font-medium text-gray-700">
                  Banco de Dados
                </span>
              </div>
              <span className={`text-sm font-semibold uppercase text-red-600`}>
                Offline
              </span>
            </div>
          ) : (
            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4 shadow-sm">
              <div className="flex items-center space-x-3">
                {getStatusIcon('loading')}
                <span className="font-medium text-gray-700">
                  Banco de Dados
                </span>
              </div>
              <span
                className={`text-sm font-semibold uppercase text-yellow-600`}
              >
                Verificando...
              </span>
            </div>
          )}
        </div>

        <div className="my-5">
          <Link
            href="/"
            className="m-auto flex w-fit rounded-lg bg-red-600 px-3 py-2"
          >
            Voltar para Home
          </Link>
        </div>

        <div className="pt-4 text-center text-sm text-gray-400">
          Última verificação: {formattedDate}
        </div>
      </div>
    </div>
  )
}

export default BackendStatusPage
