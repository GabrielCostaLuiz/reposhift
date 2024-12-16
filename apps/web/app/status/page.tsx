'use client'
import React, { useState, useEffect } from 'react'
import { CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react'

const BackendStatusPage = () => {
  const [serviceStatuses, setServiceStatuses] = useState([
    {
      name: 'Banco de Dados',
      status: 'loading',
    },
  ])

  useEffect(() => {
    const checkBackendServices = async () => {
      try {
        // Simulação de chamada de API - substitua com suas URLs reais
        const response = await fetch(`/api/v1/status`)
        const { data } = await response.json()

        const updatedStatuses = [
          {
            name: data.name,
            status: response.ok ? 'online' : 'offline',

            
          },
        ]

        return setServiceStatuses(updatedStatuses)
      } catch (error) {
        const updatedStatuses = [
          {
            name: 'Banco de Dados',
            status: 'offline',
          },
        ]
        return setServiceStatuses(updatedStatuses)
      }
    }

    checkBackendServices()
    const intervalId = setInterval(checkBackendServices, 30000) // Recheck a cada 30 segundos

    return () => clearInterval(intervalId)
  }, [])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'online':
        return <CheckCircle2 className="text-green-500" />
      case 'offline':
        return <AlertTriangle className="text-red-500" />
      default:
        return <Loader2 className="animate-spin text-yellow-500" />
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12">
      <div className="w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-xl">
        <div className="text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-800">
            Status do Backend
          </h1>
          <p className="text-gray-500">Verifique a saúde dos nossos serviços</p>
        </div>

        <div className="space-y-4">
          {serviceStatuses.map((service) => (
            <div
              key={service.name}
              className="flex items-center justify-between rounded-lg bg-gray-50 p-4 shadow-sm"
            >
              <div className="flex items-center space-x-3">
                {getStatusIcon(service.status)}
                <span className="font-medium text-gray-700">
                  {service.name}
                </span>
              </div>
              <span
                className={`
                text-sm font-semibold uppercase
                ${
                  service.status === 'online'
                    ? 'text-green-600'
                    : service.status === 'offline'
                      ? 'text-red-600'
                      : 'text-yellow-600'
                }
              `}
              >
                {service.status === 'loading'
                  ? 'Verificando...'
                  : service.status === 'online'
                    ? 'Online'
                    : 'Offline'}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-4 text-center text-sm text-gray-400">
          Última verificação: {new Date().toLocaleString()}
        </div>
      </div>
    </div>
  )
}

export default BackendStatusPage
