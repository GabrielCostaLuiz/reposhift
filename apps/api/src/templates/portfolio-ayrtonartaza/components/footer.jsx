import Link from 'next/link'
import { SiGmail } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa6'
import { TbBrandGithubFilled } from 'react-icons/tb'
import { email, github, linkedin } from '../utils/constants'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-32 flex flex-col items-center justify-center gap-10">
      <div className="flex gap-10">
        <Link
          href={`mailto:${email}`}
          prefetch={false}
          className="transition-all hover:scale-105"
        >
          <figure className="flex flex-col items-center justify-center">
            <div className="bg-primary rounded-full p-2">
              <SiGmail size={20} className="iconFooter" />
            </div>
            <figcaption className="mt-2 text-sm uppercase">Gmail</figcaption>
          </figure>
        </Link>

        <Link
          href={linkedin}
          prefetch={false}
          className="transition-all hover:scale-105"
        >
          <figure className="flex flex-col items-center justify-center">
            <div className="bg-primary rounded-full p-2">
              <FaLinkedinIn size={20} className="iconFooter" />
            </div>
            <figcaption className="mt-2 text-sm uppercase">Linkedin</figcaption>
          </figure>
        </Link>

        <Link
          href={github}
          prefetch={false}
          className="transition-all hover:scale-105"
        >
          <figure className="flex flex-col items-center justify-center">
            <div className="bg-primary rounded-full p-2">
              <TbBrandGithubFilled size={20} className="iconFooter" />
            </div>
            <figcaption className="mt-2 text-sm uppercase">Github</figcaption>
          </figure>
        </Link>
      </div>
      <div className="flex gap-10">
        <Link
          href="/projetos"
          className="inline-block transition-all hover:scale-105"
        >
          Projetos
        </Link>
        <Link
          href="/contato"
          className="inline-block transition-all hover:scale-105"
        >
          Contato
        </Link>
      </div>
      <p>© {year} - Todos os direitos reservados</p>
    </footer>
  )
}
