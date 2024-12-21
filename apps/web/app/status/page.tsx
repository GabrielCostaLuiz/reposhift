'use client'

import { AlertTriangle, CheckCircle2, Loader2 } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

const BackendStatusPage = () => {
  const [serviceStatuses, setServiceStatuses] = useState([
    {
      name: 'Banco de Dados',
      status: 'loading',
    },
  ])
  const [retryInfo, setRetryInfo] = useState({
    isOffline: false,
    countdown: 0,
  })

  const countdownRef = useRef(0) // Armazena o valor do countdown sem causar re-renders

  const checkBackendServices = async () => {
    try {
      const response = await fetch(`/api/v1/status`, {
        signal: AbortSignal.timeout(10000), // Timeout de 10 segundos
      })

      const { data } = await response.json()
      const updatedStatuses = [
        {
          name: data.name,
          status: response.ok ? 'online' : 'offline',
        },
      ]

      setServiceStatuses(updatedStatuses)

      if (response.ok) {
        setRetryInfo({ isOffline: false, countdown: 0 })
      } else {
        startRetryCountdown()
      }
    } catch (error) {
      setServiceStatuses([
        {
          name: 'Banco de Dados',
          status: 'offline',
        },
      ])
      startRetryCountdown()
    }
  }

  const startRetryCountdown = () => {
    const randomWaitTime = Math.floor(Math.random() * (120 - 60 + 1)) + 60 // Entre 60 e 120 segundos
    countdownRef.current = randomWaitTime // Define o valor inicial do countdown

    setRetryInfo({
      isOffline: true,
      countdown: randomWaitTime,
    })

    const countdownInterval = setInterval(() => {
      countdownRef.current -= 1 // Atualiza o valor diretamente no `ref`

      if (countdownRef.current <= 0) {
        clearInterval(countdownInterval)
        checkBackendServices() // Reexecuta a verificação
      } else {
        // Apenas atualiza o estado visualmente de vez em quando, não a cada segundo
        setRetryInfo((prev) => ({
          ...prev,
          countdown: countdownRef.current,
        }))
      }
    }, 1000)
  }

  useEffect(() => {
    checkBackendServices()
    const intervalId = setInterval(checkBackendServices, 10000) // Reverifica a cada 10 segundos
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
        {retryInfo.isOffline && (
          <div className="mb-4 flex items-center space-x-3 border-l-4 border-yellow-500 bg-yellow-100 p-4">
            <AlertTriangle className="text-yellow-600" />
            <div>
              <p className="font-medium text-yellow-700">
                Serviço Temporariamente Indisponível
              </p>
              <p className="text-sm text-yellow-600">
                Tentando reconectar. O backend está hospedado em um plano
                gratuito e pode levar tempo para reativar.
              </p>
              <p className="mt-1 text-sm text-yellow-600">
                Tentando novamente em {retryInfo.countdown} segundos...
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
