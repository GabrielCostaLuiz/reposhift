'use server'

import { apiGithubRepos } from '../../utils/constants'

export async function getRepos() {
  try {
    const response = await fetch(apiGithubRepos, {
      next: {
        revalidate: 1800,
      },
    })

    if (!response.ok) {
      throw new Error(`Erro ao buscar repositórios: ${response.statusText}`)
    }

    const data = await response.json()

    if (!Array.isArray(data)) {
      throw new Error('A resposta da API não é um array')
    }

    data.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at)
    })

    const editUrlForLanguages = apiGithubRepos
      .replace('/repos', '')
      .replace('users', 'repos')

    const reposWithLanguages = await Promise.all(
      data.map(async (repo) => {
        const languagesResponse = await fetch(
          `${editUrlForLanguages}/${repo.name}/languages`,
          {
            next: {
              revalidate: 1800,
            },
          }
        )

        if (!languagesResponse.ok) {
          throw new Error(
            `Erro ao buscar linguagens para o repositório ${repo.name}`
          )
        }

        const languages = await languagesResponse.json()

        return {
          ...repo,
          languages,
        }
      })
    )

    return reposWithLanguages
  } catch (error) {
    console.error('Erro ao buscar dados dos repositórios:', error)

    if (error.message.includes('rate limit exceeded')) {
      return {
        error:
          'Atingido o limite de requisições à API do GitHub. Tente novamente mais tarde.',
      }
    }

    return []
  }
}
