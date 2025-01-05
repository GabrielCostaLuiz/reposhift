'use client'
import {
  Calendar,
  CheckCircle,
  Code,
  Database,
  ExternalLink,
  Heart,
  Rocket,
  Server,
} from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'

export default function JourneyPage() {
  const [activeDay, setActiveDay] = useState<null | number>(null)

  const milestones = [
    {
      day: 1,
      title: 'O Começo de Tudo',
      icon: <Rocket className="h-6 w-6 text-purple-400" />,
      content: `Sabe aquele momento em que você está deitado na cama, são 3 da manhã, e sua mente está a mil por hora com uma ideia? Foi exatamente assim que o RepoShift nasceu! 😄

      Depois de muitas aulas na Rocketseat e no curso.dev, percebi que poderia criar algo diferente: um gerador automático de portfólios para desenvolvedores. A ideia era simples, mas poderosa - conectar com o GitHub, puxar os dados dos repositórios e gerar um portfólio incrível em questão de minutos.`,
    },
    {
      day: 2,
      title: 'Mãos à Obra',
      icon: <Code className="h-6 w-6 text-purple-400" />,
      content: `Com o domínio reposhift.com.br comprado (sim, eu me empolguei! 😅), era hora de começar a codificar. Configurei o projeto com Next.js, criei a primeira API no backend e comecei a ver tudo tomando forma. Ver aquele primeiro "Hello World" na tela foi emocionante!`,
    },
    {
      day: 3,
      title: 'Construindo as Fundações',
      icon: <Database className="h-6 w-6 text-purple-400" />,
      content: `Dia de me aventurar com o Prisma e configurar o banco de dados. Confesso que fiquei orgulhoso quando vi tudo funcionando - os testes passando, o Swagger documentando as APIs automaticamente... É incrível como pequenas vitórias nos motivam a continuar!`,
    },
    {
      day: '4-5',
      title: 'Superando Desafios',
      icon: <Server className="h-6 w-6 text-purple-400" />,
      content: `Os dias 4 e 5 foram... interessantes! 😅 Entre hospedar o backend no Render, configurar o banco na Neon e resolver milhões de probleminhas de deploy, aprendi que ser desenvolvedor é 50% código e 50% resolver problemas inesperados. Mas quando tudo funcionou? Que sensação incrível!`,
    },
    {
      day: '6-8',
      title: 'Dando Vida ao Projeto',
      icon: <FaGithub className="h-6 w-6 text-purple-400" />,
      content: `Começou a fase mais empolgante: implementar a autenticação com GitHub, criar as telas principais e ver o projeto ganhando vida. A cada novo commit, o RepoShift ficava mais próximo do que eu tinha imaginado naquela noite insone.`,
    },
    {
      day: '9-10',
      title: 'Refinando a Experiência',
      icon: <Heart className="h-6 w-6 text-purple-400" />,
      content: `Adicionei as funcionalidades de curtir e favoritar projetos, melhorei o visual das telas... É incrível como pequenos detalhes fazem tanta diferença na experiência do usuário. Cada animação, cada transição suave, tudo foi pensado com carinho.`,
    },
    {
      day: '11-12',
      title: 'MVP Concluído! 🎉',
      icon: <CheckCircle className="h-6 w-6 text-purple-400" />,
      content: `E finalmente chegamos lá! Depois de alguns bugs teimosos no caminho (aquele problema com o download de templates em produção quase me fez arrancar os cabelos 😅), o MVP estava pronto! 

      Ver o projeto funcionando, poder gerar portfólios automaticamente e imaginar quantos desenvolvedores isso pode ajudar... não tem preço!`,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-100">
            A Jornada do RepoShift
          </h1>
          <p className="text-lg text-gray-300">
            De uma ideia às 3 da manhã até um MVP funcional - uma história sobre
            persistência, aprendizado e muuuito café! ☕
          </p>

          <div className="flex flex-col-reverse items-center justify-center gap-2">
            <Link
              href="https://github.com/GabrielCostaLuiz/reposhift"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-700"
            >
              <FaGithub className="h-5 w-5" />
              Ver historia completo no GitHub
              <ExternalLink className="h-4 w-4" />
            </Link>

            <Link
              href="/"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-700"
            >
              Home
            </Link>
          </div>
        </div>

        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.day}
              className={`cursor-pointer rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/30 ${
                activeDay === index ? 'ring-2 ring-purple-500' : ''
              }`}
              onClick={() => setActiveDay(activeDay === index ? null : index)}
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="rounded-lg bg-gray-700 p-2">
                  {milestone.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-400">
                      Dia {milestone.day}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-100">
                    {milestone.title}
                  </h2>
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeDay === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="whitespace-pre-line text-gray-300">
                  {milestone.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-100">
            E essa história continua...
          </h2>
          <p className="text-gray-300">
            O MVP foi só o começo! Tem muito mais novidade vindo por aí. Afinal,
            todo grande projeto começa com um primeiro commit, não é mesmo? 😉
          </p>
        </div>
      </div>
    </div>
  )
}
