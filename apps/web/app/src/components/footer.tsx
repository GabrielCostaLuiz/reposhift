export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-800 bg-zinc-900/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h4 className="mb-4 text-lg font-semibold text-purple-400">
              Sobre o Projeto
            </h4>
            <p className="text-sm text-gray-400">
              Este projeto foi desenvolvido com foco em ajudar devs a fazer seu
              portfolio mais rapidamente. Contribuições são bem-vindas!
            </p>
          </div>
          {/* <div>
            <h4 className="mb-4 text-lg font-semibold text-purple-400">
              Recursos
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Documentação</li>
              <li>Guia de Instalação</li>
              <li>Exemplos</li>
              <li>Changelog</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold text-purple-400">
              Conecte-se
            </h4>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-purple-400"
              >
                <FaGithub className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-purple-400"
              >
                <Globe className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-purple-400"
              >
                <TbShare2 className="h-5 w-5" />
              </Button>
            </div>
          </div> */}
        </div>
        <div className="mt-8 border-t border-zinc-800 pt-8 text-center text-sm text-gray-400">
          © 2024 Seu Portfolio. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
