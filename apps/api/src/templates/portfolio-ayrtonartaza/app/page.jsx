import { aboutMe, apiGithub, heroResume, name, email } from '../utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import hero from '../public/images/hero/hero.png'
import { IoIosArrowRoundDown } from 'react-icons/io'
import { getRepos } from './actions/getRepositories'
import CardProjects from '../components/cardProjects'

export default async function Home() {
  const repositorios = await getRepos()

  const errorMessage = repositorios.error

  const skills = [
    'JavaScript',
    'React',
    'TypeScript',
    'Styled Components',
    'GIT',
  ]

  return (
    <div className="mt-52 space-y-28">
      <section className="min-h-[60vh] space-y-5">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="space-y-8">
            <h1 className="flex flex-col font-bold">
              Desenvolvedor
              <span className="text-primary mt-5 text-6xl font-bold capitalize">
                {name}
              </span>
            </h1>

            <p>{heroResume}</p>

            <div>
              <Link
                href={`mailto:${email}?&subject=${encodeURIComponent(
                  'Contato via Formulário'
                )}`}
                className="buttonPurple inline-block transition-all hover:scale-105"
              >
                Entre em Contato
              </Link>
            </div>
          </div>

          <div>
            <Image
              src={hero}
              alt="Ilustração de uma pessoa com notebook trabalhando em um projeto de desenvolvimento web"
              title="Pessoa com notebook desenvolvendo um projeto"
              className="m-auto object-cover"
            />
          </div>
        </div>

        <a
          href="#about"
          className="block animate-bounce transition-all hover:scale-110"
        >
          <IoIosArrowRoundDown size={50} className="text-primary m-auto " />
        </a>
      </section>

      <section id="about" className="scroll-m-8">
        <h2>Sobre Mim</h2>

        <p className="border-l-primary border-l-4 pl-3">{aboutMe}</p>
      </section>

      <section>
        <h2>Projetos</h2>

        {errorMessage ? (
          <p className="text-red-500">{errorMessage}</p>
        ) : (
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {repositorios.slice(0, 3).map((repositorio) => {
              return (
                <CardProjects key={repositorio.id} repositorio={repositorio} />
              )
            })}
          </div>
        )}

        <div className="mt-14  ">
          <Link
            href="/projetos"
            className="buttonPurple m-auto block w-2/6 text-center font-bold !uppercase transition-all hover:scale-105"
          >
            Ver Todos os Projetos
          </Link>
        </div>
      </section>

      <section>
        <h2>Skills</h2>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill) => (
            <div key={skill}>
              <figure className="w-fit">
                <Image
                  src={`/images/skills/${skill
                    .toLowerCase()
                    .replace(/[-.\s]/g, '')}.svg`}
                  alt={`Imagem de ${skill}`}
                  title={`Imagem de ${skill}`}
                  width={150}
                  height={150}
                />
                <figcaption className="mt-4 text-center uppercase tracking-widest">
                  {skill}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
