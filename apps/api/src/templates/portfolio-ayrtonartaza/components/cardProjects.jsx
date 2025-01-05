import Image from 'next/image'
import imageProjectDefault from '../public/images/project/projectDefault.png'

export default function CardProjects({ repositorio }) {
  return (
    <div className="flex h-full flex-col rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="relative h-[20rem] w-full overflow-hidden rounded-t-lg bg-red-500">
        <Image
          src={imageProjectDefault}
          alt={repositorio.name || 'Imagem padrão de projeto'}
          title={repositorio.name || 'Imagem padrão de projeto'}
          className="object-fill"
          fill
        />
      </div>

      <div className="flex flex-grow flex-col justify-between space-y-4 p-6">
        <div className="space-y-4">
          <h3 className="text-lg font-bold uppercase tracking-widest">
            {repositorio.name.replace(/[-_]/g, ' ') ||
              'Nome do projeto não disponível'}
          </h3>

          <div className="flex gap-3">
            {repositorio.topics && repositorio.topics.length > 0 ? (
              repositorio.topics.map((tag, i) => (
                <span
                  key={i}
                  className="bg-primary rounded-lg px-3 py-1 text-[0.8rem] uppercase tracking-widest text-white"
                >
                  {tag}
                </span>
              ))
            ) : repositorio.languages &&
              !repositorio.languages.message &&
              !repositorio.languages.documentation_url ? (
              Object.entries(repositorio.languages).map(([language]) => (
                <span
                  key={language}
                  className="bg-primary rounded-lg px-3 py-1 text-[0.8rem] uppercase tracking-widest text-white"
                >
                  {language}
                </span>
              ))
            ) : repositorio.language ? (
              <span className="bg-primary rounded-lg px-3 py-1 text-[0.8rem] uppercase tracking-widest text-white">
                {repositorio.language}
              </span>
            ) : (
              <span className="text-sm text-gray-500">
                Nenhuma tag disponível
              </span>
            )}
          </div>

          <p>
            {repositorio.description ||
              'Descrição não disponível para este projeto.'}
          </p>
        </div>

        <div className="mt-auto flex gap-4">
          {repositorio.html_url ? (
            <a
              href={repositorio.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary rounded-lg px-4 py-2 text-sm uppercase text-white transition-all hover:scale-105"
            >
              GitHub
            </a>
          ) : (
            <button
              disabled
              className="cursor-not-allowed rounded-lg bg-gray-400 px-4 py-2 text-sm uppercase text-white"
            >
              GitHub indisponível
            </button>
          )}

          {repositorio.homepage ? (
            <a
              href={repositorio.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-green-600 px-4 py-2 text-sm uppercase text-white transition hover:bg-green-500"
            >
              Live
            </a>
          ) : (
            <button
              disabled
              className="cursor-not-allowed rounded-lg bg-gray-400 px-4 py-2 text-sm uppercase text-white"
            >
              Live indisponível
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
