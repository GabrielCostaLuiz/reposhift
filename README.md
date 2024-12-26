# Bem-vindo ao Projeto **REPOSHIFT**

Olá! Neste repositório, vou compartilhar passo a passo como comecei do zero e desenvolvi o MVP do meu projeto, o **REPOSHIFT**. Vamos embarcar juntos nessa jornada?

O REPOSHIFT é um MVP de SaaS que automatiza a criação de portfólios para desenvolvedores. A ideia central é permitir que usuários conectem suas contas do GitHub, extraiam informações de seus repositórios e gerem um portfólio completo com base em templates personalizáveis. O sistema permite visualizar prévias, editar o conteúdo, e baixar o código do portfólio para hospedagem. O projeto utiliza Next.js no front-end, Fastify no back-end, e foi inspirado em aprendizados da Rocketseat e curso.dev.

---

## **Como surgiu a ideia do projeto?**

Bom, sou apaixonado por programação, mas nem sempre foi fácil. Sempre me vi lutando contra a famosa síndrome do impostor: "Nossa, estou muito parado enquanto outras pessoas da minha idade (ou até mais novas) estão trabalhando ou estudando na área." Mas, sabe o que é curioso? Essa sensação também alimentava minha vontade de aprender cada vez mais.

Sempre admirei o trabalho da **Rocketseat**, e posso dizer que uns 70% do que sei de programação hoje veio de lá. Então, não é surpresa que eu tenha comprado o curso deles... pela segunda vez! 😂 Queria reforçar o que já havia aprendido nas trilhas Discover e Ignite e, desta vez, decidi ir além do Frontend. Queria deixar de ser apenas um "estilizador de HTML" (quem nunca ouviu isso, né?) e me tornar um desenvolvedor **FullStack**. Então, foquei na trilha de **Node.js**. E, não é que eu gostei? Acho que até mais do que do Frontend!

Porém, sempre tive dificuldade em me engajar completamente com projetos dados por outras pessoas, como os desafios da Rocketseat. Minha solução? Pegar os conceitos que aprendi nas aulas e criar projetos do zero, customizados por mim. Isso me obrigava a pensar nas regras de negócio, estruturar o projeto por completo e, assim, fixar ainda mais o conteúdo.

Foi nesse contexto que surgiu a ideia do **REPOSHIFT**. Durante um módulo de Backend no curso, o Diego Fernandes (um dos melhores professores que já vi, sem dúvidas) criou um sistema onde o usuário fazia autenticação pelo GitHub e recebia alguns dados. Isso me lembrou de quando comecei a programar, criando aquelas **famosas Pokedex** para subir no GitHub e exibir no meu portfólio. (Quem nunca fez sua vigésima Pokedex na vida de dev iniciante, né? 😂)

Foi então que pensei:  
"Calma aí... Se eu consigo autenticar um usuário, acessar sua API do GitHub e extrair dados dos seus repositórios, por que não usar isso para criar portfólios automáticos? Algo simples, rápido e prático para qualquer desenvolvedor!"

---

## **A visão do projeto**

Confesso que, no começo, me empolguei bastante. Já imaginei o nome da empresa, a paleta de cores, o melhor domínio, a fonte ideal e, claro, aquele sonho de ficar rico, viajar o mundo e ter uma geladeira Brastemp com IA e luzes de LED. 😅

Mas, logo depois, coloquei os pés no chão. Percebi que, mesmo com uma boa ideia, não seria fácil. Se fosse, muita gente já estaria rica com projetos incríveis que solucionam dores reais. Além disso, me perguntei:  
"Será que sou bom o suficiente para realizar isso?"  
"Será que consigo?"  
"Será que alguém usaria esse produto?"

A resposta veio quando olhei para trás, para todos os projetos que já fiz. Nenhum deles me fez perder emprego, nenhum me deixou doente (exceto pelo estresse aqui e ali 😅) e nenhum me derrotou de verdade. Então, me perguntei:  
**Por que não tentar?**

Não tinha nada que me impedisse, exceto eu mesmo. Foi aí que decidi levar esse projeto a sério, com um nível de comprometimento que nunca tive antes. Não sei se vou ficar rico, não sei se vou desistir no meio do caminho, e não sei se as pessoas vão usar. Mas sei que vou começar. E vou dar o meu melhor para, no mínimo, entregar o MVP dessa ideia.

---

## **Por que documentar tudo?**

Esse projeto será muito mais do que apenas um produto. Ele será meu **portfólio**, meu **aprendizado** e meu **trabalho**. Quem sabe, no futuro, ele seja a virada de chave que eu sempre procurei.

Então, bem-vindo(a) ao **REPOSHIFT**. Espero que você aproveite acompanhar essa jornada tanto quanto eu estou aproveitando construí-la.

Vamos lá? 🚀

---

### Um adendo

Além do curso da Rocketseat, comprei também o curso.dev, e o Filipe Deschamps é outro professor excepcional. Sempre pulava os vídeos dele por serem mais técnicos e de nível mais pleno/sênior. Antes, eu queria apenas fazer minhas Pokedex e não pensar nas partes mais difíceis da programação. Pois, escrever um código todo mundo sabe, mas e a parte mais densa da programação, de se tornar realmente um desenvolvedor competente com um foco muito grande na parte técnica? Então, comecei a acompanhar as aulas dele e sempre comento o que aprendi e como implementei isso no projeto.

Estou construindo este SaaS com base no conteúdo do curso.dev, que considero extremamente valioso para qualquer desenvolvedor. Ele traz uma didática incrível e ensinamentos essenciais para o crescimento como dev.

Sempre que aprender algo novo nas aulas do Filipe, vou compartilhar aqui o que implementei no projeto.

---

### Atualizações Diárias

Tentarei trazer atualizações diárias, mas pode ser que, em alguns dias, eu não consiga. No entanto, o cronograma seguirá a sequência do dia anterior.

## **Dia 1 - Introdução ao Projeto**

### Introdução

Primeiro dia de programação do meu **SaaS**. Estava realmente animado, até porque no dia anterior (que na verdade era o mesmo dia de hoje 😂) eu fui dormir às 3h da manhã, sabendo que tinha que acordar às 6h. Estava procurando nomes, conversando com o **GPT** para alinhar algumas ideias, escolhendo cores e outras coisas que sempre imaginamos quando queremos começar um projeto, né? 😅

No entanto, decidi dar um passo de cada vez para não me sobrecarregar e acabar me desmotivando com a grande demanda. A ideia era **não me frustrar por não conseguir concluir metade das tarefas no primeiro dia e desistir**.

### Aprendizado do Dia 1

Logo cedo, indo para o trabalho, fui assistindo as aulas do **Filipe Deschamps**. E à tarde, voltando do trabalho, também continuei assistindo as aulas. As aulas de hoje foram mais tranquilas, pois já tinha conhecimento sobre **Git**, **GitHub** e **deploy na Vercel**. Uma das novidades foi aprender sobre **Issues** e **Milestones** no GitHub.

### Atividades no Projeto - Dia 1

- **Criação do Repositório e Organização**:  
  Criei o repositório **RepoShift** e configurei algumas **Issues** e **Milestones**. A primeira Milestone foi a de `"Em Construção"` e vinculei algumas Issues a ela para organizá-las.

- **Configuração do Projeto**:  
  Configurei o projeto usando **TurboRepo**, aplicando as configurações que aprendi no vídeo da **RocketSeat**.

- **Criação do Projeto Base com Next.js**:  
  Criei o projeto base utilizando **Next.js**, que será a fundação do meu SaaS.

- **Hospedagem na Vercel**:  
  Hospedei o projeto na **Vercel**, o que já me permitiu ter o ambiente de desenvolvimento pronto e acessível online.

- **Conclusão das Issues da Milestone 0**:  
  Finalizei as Issues relacionadas à criação do repositório, modelagem das configurações do **TurboRepo** e criação da página `"Em Construção"`, todas pertencentes à Milestone 0.

- **Pesquisa e Escolha do Logo**:  
  Realizei uma pesquisa em alguns logos e escolhi um **logo provisório** para o **RepoShift**.

- **Compra do Domínio**:  
  Comprei o domínio **reposhift.com.br** e atualizei as configurações na **Vercel** para apontar para o domínio adquirido.

---

## **Dia 2 - Conexão Backend e Frontend**

### Avanços no Projeto - Dia 2

- **Finalização da Compra do Domínio e Implementação na Vercel**:  
  **reposhift.com.br no ar** 😀 Hoje finalizei a implementação do domínio na **Vercel**, configurando o **DNS** no **registro.br**.

- **Adição da Milestone 01: Fundação e Milestone 1.1: Fundação Web**:  
  Criei mais duas **Milestones** no repositório do **GitHub** e adicionei e finalizei algumas Issues da Milestone 01.

- **Criação da Primeira API do Frontend e Rota do Backend**:  
  Criei uma rota no backend para utilizar a **API criada no frontend**, com o intuito de testar a conexão do backend com o frontend. Realizei o acesso à URL `localhost:port/api/v1/status` só para testar o status da conexão.

- **Primeiro Teste do Sistema**:  
  No backend, fiz a adição do **primeiro teste**, que verificava se a conexão da API estava funcionando corretamente, retornando os dados esperados.

- **Criação do Banco de Dados Local**:  
  Subi o **Docker** localmente na minha máquina, fiz a adição do `docker-compose.yml` e executei o comando para subir um container da imagem do **PostgreSQL**, que será o banco de dados usado na aplicação.

### Considerações do Dia 2

Hoje irei mudar um pouco o meu computador, instalando o **Linux** nele. Apesar disso, vou manter um dual boot, né? Vamos ver se vou voltar feliz ou triste por ter feito alguma **merda no computador kkkk**, mas enfim, por hoje foi isso.

---

## **Dia 3 - Configuração do Prisma e Testes**

### Introdução ao Dia 3

Hoje foi um dia de grandes avanços no meu projeto, agora programando diretamente no meu **Linux**, e felizmente tudo deu certo com a instalação! 🐧 Além disso, aprendi bastante sobre testes e configurações no backend, o que deixou o sistema mais robusto e organizado.

### Aprendizado do Dia 3

Dediquei boa parte do meu tempo a aprender e configurar o **Prisma** no projeto. Já tinha ouvido falar bastante sobre ele, mas agora foi a hora de colocar em prática. Além disso, explorei o uso do **Fastify Swagger** para documentar a API de forma automatizada e compreendi como estruturar as **variáveis de ambiente** para melhorar a manutenção do código. O dia também foi de bastante prática com testes e integração entre os serviços do projeto.

### Atividades no Projeto - Dia 3

- **Integração do Prisma no Projeto**:  
  Adicionei o **Prisma** ao backend e configurei o banco de dados para trabalhar com o **PostgreSQL** no container Docker. Também criei uma **seed** para popular dados iniciais no banco, o que facilita testes e desenvolvimento inicial.

- **Configuração de Variáveis de Ambiente**:  
  Centralizei todas as configurações sensíveis no arquivo `.env`, como credenciais do banco de dados e configurações do servidor. Além disso, ajustei o arquivo `docker-compose.yml` para utilizar essas variáveis de ambiente, deixando o setup mais organizado e seguro.

- **Criação de Testes**:  
  Desenvolvi **testes básicos** para verificar a conexão do backend com o banco de dados e a integração com o frontend.

  - **Teste 1**: Verificava a conexão do backend com o banco.
  - **Teste 2**: Validava o retorno da rota `/status` do frontend, que por sua vez fazia uma chamada ao backend e verificava a resposta.

- **Página de Status do Sistema**:  
  Criei uma **página de status** no frontend para monitorar o funcionamento das APIs e a conexão com o banco de dados. Isso vai ser útil para acompanhar a saúde do sistema durante o desenvolvimento e em produção.

- **Documentação Automática da API**:  
  Integrei o **Fastify Swagger** ao backend para gerar documentação gráfica automática das rotas da API. Agora é possível acessar `/docs` no servidor (quando o backend estiver hospedado) para visualizar e testar as rotas diretamente na interface.

### Considerações do Dia 3

Encerrando o dia com um sentimento de **produtividade e organização**! Foi muito bom ver o sistema ganhando forma e ficando cada vez mais estruturado. Amanhã pretendo continuar avançando nas funcionalidades principais e integrar mais testes para garantir que tudo funcione como esperado.

---

## **Dia 4 - Hospedagem e Ajustes no Backend**

### Introdução ao Dia 4

Hoje foi um daqueles dias intensos, em que o trabalho parecia não avançar como esperado, mas a persistência deu frutos no final. Com o auxílio dos vídeos da **Rocketseat** e do **curso.dev**, consegui finalmente hospedar o banco de dados na **Neon** e o backend no **Render**. Foi um verdadeiro teste de paciência, mas ao final, tudo deu certo! Kkkk

### Aprendizado do Dia 4

O dia foi repleto de ajustes e descobertas. Enfrentei alguns problemas no processo de **git no GitHub para fazer o deploy na Vercel**, principalmente devido a mudanças no meu setup e ao fato de não estar subindo todos os arquivos necessários. Além disso, a configuração do banco de dados na **Neon** foi tranquila, mas a integração com o **Render** gerou bastante confusão, com diversos erros de configuração e build.

Apesar das dificuldades, aprendi muito com cada erro e consegui contornar os problemas. Hoje, o sistema está mais próximo de estar funcional e pronto para a produção.

### Atividades no Projeto - Dia 4

- **Resolução de Erros de git no GitHub**:  
  Inicialmente, meus gits no GitHub para deploy na vercel estavam dando erro. Acredito que isso tenha ocorrido devido à mudança para o **Linux** e a alteração do **username no GitHub**. Depois, percebi que o erro era causado por eu estar subindo apenas o arquivo alterado e não o **package.json**, o **lock do pnpm** e o **pnpm-workspace**. Após subir todos os arquivos necessários, o deploy finalmente funcionou!

- **Criação de Conta na Neon e Render**:  
  Criei contas nas plataformas **Neon** e **Render**. No **Neon**, consegui criar o banco de dados sem problemas, pegando os parâmetros de conexão necessários para a produção.

- **Configuração da Conexão com o Banco de Dados no Render**:  
  Implementei as variáveis de ambiente no **Render** com os parâmetros de conexão do banco de dados na **Neon** para que o backend se conectasse corretamente à base de dados na produção.

- **Ajustes na Configuração do Render**:  
  No **Render**, enfrentei alguns problemas com as configurações do projeto. Primeiramente, precisei corrigir a estrutura da pasta **config**, onde acabei colocando arquivos do **TS** no **eslint** e vice-versa, mas não estava gerando erro, apenas foi algo que percebi ao revisar.

- **Correção de Erros de Build**:  
  Durante o build do frontend, estava recebendo erros relacionados à falta das variáveis de ambiente. Corrigi o comando de build para que as variáveis fossem carregadas corretamente, o que resolveu o problema.

- **Configuração do Prisma no Render**:  
  No **Render**, precisei configurar o **Prisma** para gerar as migrations e rodar o deploy corretamente. Também configurei um domínio personalizado, pois a URL padrão do **Render** não me interessava.

- **Atualização do DNS no Registro.br**:  
  Para conectar o domínio **reposhift.com.br** ao **Render**, fiz a configuração no **DNS** do **registro.br**, ajustando as entradas para apontar para o novo domínio personalizado.

- **Sincronização das Variáveis de Ambiente entre Vercel e Render**:  
  Ajustei as variáveis de ambiente tanto na **Vercel** quanto no **Render** para garantir que ambas as plataformas tivessem as mesmas configurações e evitassem erros de variáveis faltando.

- **Finalização das Configurações e Testes**:  
  Após os ajustes, fiz uma última revisão nas configurações e, felizmente, todos os serviços estavam funcionando corretamente! O banco de dados estava na **Neon**, e o **Render** estava operando sem problemas.

- **Teste no FrontEnd**:  
  Depois de todos esses ajustes, através da URL [https://reposhift.com.br/status](https://reposhift.com.br/status), é possível verificar se o banco de dados/backend está funcionando corretamente. Se a página retornar "ONLINE", significa que o sistema está ativo e funcionando como esperado, pois a rota testa tanto a conexão com o backend quanto com o banco de dados. Quando tudo está certo, você verá a mensagem "Banco de Dados ONLINE".

  Se a página não retornar "ONLINE" ou apresentar outro erro, pode ser que o serviço tenha sido inativado devido à inatividade dos servidores gratuitos que estamos utilizando. Aqui estão algumas ações que o **usuário** pode tomar para resolver a situação:

  ### O que fazer se o sistema não estiver "ONLINE":

  1. **Tente novamente mais tarde**:  
     Caso o serviço tenha sido inativado por inatividade no **Render** (plano gratuito), pode ser que o servidor esteja temporariamente inativo. Tente acessar a página novamente após alguns minutos.

  2. **Verifique sua conexão com a internet**:  
     Às vezes, problemas de conectividade local podem afetar a resposta do servidor. Certifique-se de que a sua conexão com a internet está estável e tente acessar novamente a página.

  3. **Entre em contato com o suporte**:  
     Se o problema persistir por um longo período, você pode entrar em contato com o suporte da aplicação através de um canal específico, caso tenha esse recurso disponível. Eles poderão verificar o status do serviço e ajudar a reativar o banco de dados ou o backend.

  4. **O que pode ter causado o problema?**:

     - **Inatividade no Render**: Como o **Render** oferece um plano gratuito, ele pode desativar o serviço após um período de inatividade. Isso pode causar lentidão ou falha ao tentar acessar a aplicação. Se isso ocorrer, o suporte da aplicação pode ser necessário para reiniciar os serviços manualmente.
     - **Inatividade no Neon**: O **Neon**, no entanto, não possui essa funcionalidade conhecida de inativar a instância devido à inatividade, então esse problema não é esperado em relação ao banco de dados.

  5. **Aguarde a reativação automática**:  
     Dependendo das configurações do **Render**, o serviço pode ser reativado automaticamente após um tempo. Se o problema for com o banco de dados ou o backend, a aplicação pode voltar a funcionar após o processo de reativação.

  ### Como garantir que o serviço continue ativo?

  Caso o problema seja recorrente, é importante saber que o **Render** tem limitações de uso nos planos gratuitos, especialmente em termos de inatividade. Se o serviço ficar inativo por muito tempo, a instância gratuita pode precisar ser reativada manualmente, o que pode causar atrasos nas solicitações, de até 50 segundos ou mais. Se o problema de inatividade persistir, pode ser necessário entrar em contato com o suporte ou considerar a atualização para um plano pago no **Render**, que oferece maior estabilidade e garante maior tempo de uptime.

### Considerações do Dia 4

Apesar de eu ter planejado avançar mais no projeto, os problemas com a hospedagem tomaram mais tempo do que eu esperava. Como meu tempo de programação diária é limitado, entre 3 e 4 horas, esses contratempos atrasaram o progresso, mas, ao mesmo tempo, me proporcionaram muito aprendizado.

Agora, tudo está funcionando, e o sistema está mais estável para os próximos passos. A experiência foi valiosa, e o importante é que tudo finalmente está funcionando conforme esperado. Vamos em frente! 💪

---

## **Dia 5 - Criação do Banco de Dados de Teste e Preview na Vercel**

### Introdução ao Dia 5

Hoje foi um dia focado na criação do banco de dados de teste e no deploy de um **preview** da aplicação na **Vercel**. Foi ótimo ver o sistema rodando na Vercel pela primeira vez, mesmo que em um ambiente de teste. Além disso, aprendi bastante sobre como preparar o banco de dados para testes e a importância de um ambiente de staging.

### Aprendizado do Dia 5

O principal aprendizado de hoje foi sobre a criação e configuração de um banco de dados de teste, para garantir que o backend e o frontend pudessem ser validados de forma isolada antes de qualquer deploy de produção. Também, consegui configurar um **preview** na **Vercel**, o que me permitiu ver a aplicação rodando de forma mais próxima do ambiente de produção.

### Atividades no Projeto - Dia 5

- **Criação do Banco de Dados de Teste**:  
  Criei um banco de dados separado para o ambiente de testes, garantindo que os dados não fossem misturados com os de produção. Esse banco de dados é usado exclusivamente para garantir que o sistema funcione corretamente sem afetar a integridade dos dados reais.

- **Deploy na Vercel (Preview)**:  
  Configurei um deploy de preview na **Vercel**, o que me permite testar a aplicação antes de fazer o deploy para produção. Isso é essencial para validar alterações sem afetar a aplicação ao vivo.

- **Testes de Integração com o Banco de Dados de Teste**:  
  Realizei testes para verificar se o sistema estava utilizando corretamente o banco de dados de teste. Isso envolveu criar e excluir dados temporários para garantir que o comportamento do sistema estava conforme o esperado.

### Considerações do Dia 5

O dia foi bastante produtivo e me permitiu testar o sistema de forma mais segura, sem comprometer os dados reais. Além disso, ver a aplicação rodando na Vercel, mesmo que em um ambiente de teste, foi uma grande conquista! Agora posso focar em preparar a versão de produção com mais confiança.

---

## **Dia 6 - Organização dos Scripts no `package.json` e Estabilização do `pnpm test` e `pnpm dev`**

### Introdução ao Dia 6

Hoje o foco foi na organização dos scripts no **`package.json`** para facilitar o gerenciamento de comandos como **`pnpm test`** e **`pnpm dev`**. Também investi tempo estabilizando o fluxo de desenvolvimento, garantindo que os testes rodassem corretamente e que o servidor fosse iniciado sem problemas.

### Aprendizado do Dia 6

A principal lição de hoje foi a importância de manter o **`package.json`** bem organizado, com scripts claros e úteis para facilitar o fluxo de trabalho, tanto para testes quanto para o desenvolvimento contínuo. Além disso, o processo de estabilização dos scripts me ajudou a resolver alguns problemas com a configuração do ambiente.

### Atividades no Projeto - Dia 6

- **Organização dos Scripts no `package.json`**:  
  Organizei os scripts dentro do **`package.json`** para melhorar a manutenção e o fluxo de trabalho. Isso incluiu comandos para rodar os testes e iniciar o servidor de desenvolvimento com **`pnpm dev`**. A ideia foi garantir que o projeto fosse executado sem complicações.

  - **Script `pnpm dev`**:  
    Configurado para rodar o servidor de desenvolvimento e garantir que a aplicação esteja rodando no ambiente de desenvolvimento sem erros.

  - **Script `pnpm test`**:  
    Organizei os testes para serem rodados com o comando **`pnpm test`**, simplificando o processo de verificação do código durante o desenvolvimento. Isso também inclui a integração com o framework de testes utilizado no projeto.

- **Estabilização do `pnpm test`**:  
  Ajustei a configuração para que os testes fossem executados corretamente em todos os ambientes. Isso envolveu a instalação de dependências adicionais e ajustes nos arquivos de configuração.

- **Estabilização do `pnpm dev`**:  
  Resolvi problemas com a execução do servidor de desenvolvimento, corrigindo erros de configuração e garantindo que o ambiente fosse iniciado sem problemas.

### Considerações do Dia 6

Hoje foi um dia de ajustes finais para garantir que o fluxo de desenvolvimento fosse o mais tranquilo possível. Organizar os scripts no **`package.json`** e estabilizar os comandos foi um passo importante para tornar o projeto mais eficiente e fácil de manter. Agora, o ambiente de desenvolvimento está mais estável, e posso focar em avançar com o desenvolvimento das funcionalidades principais.

---

## **Dia 7 - Criação de Telas no Frontend, Padronização de Commits e Fluxo de Autenticação com GitHub Apps no Backend**

### Introdução ao Dia 7

Hoje foi um dia produtivo focado no desenvolvimento de funcionalidades essenciais tanto no frontend quanto no backend. No frontend, criei telas principais da aplicação, enquanto no backend implementei o fluxo de autenticação com **GitHub Apps**, permitindo login seguro e integrado. Também instalei o **Commitizen** para padronizar os commits no repositório.

---

### Aprendizado do Dia 7

- **Frontend**:  
  Desenvolvi interfaces organizadas e práticas para navegação do usuário.
- **Backend**:  
  Aprendi a integrar o fluxo de autenticação via **GitHub Apps**, usando OAuth para login.
- **Controle de Versão**:  
  A integração do **Commitizen** trouxe clareza e consistência ao histórico de commits.

---

### Atividades no Projeto - Dia 7

#### **Frontend**

1. **Tela de Login**:  
   Desenvolvi a tela de login com integração ao fluxo de autenticação do **GitHub Apps**. O botão "Entrar com GitHub" redireciona o usuário para a página de autorização da API do GitHub.

2. **Tela Home**:  
   Criação da tela inicial da aplicação com informações relevantes para o usuário.

3. **Tela de Portfólios**:  
   Desenvolvi a tela de exibição e gerenciamento de portfólios, permitindo uma navegação prática.

4. **Tela de Favoritos**:  
   Tela para visualização e gerenciamento de itens favoritos, personalizada para o usuário.

---

#### **Backend - Fluxo de Autenticação com GitHub Apps**

1. **Integração com GitHub Apps**:

   - Configurei um aplicativo no GitHub Developer Apps para obter as **credenciais de cliente** (client_id e client_secret).
   - O frontend redireciona o usuário para a página de autenticação do GitHub, onde ele concede acesso ao aplicativo.

2. **Recepção do Código de Autorização**:

   - Após a autenticação, o GitHub redireciona para o backend com um **código de autorização**.
   - O backend troca esse código por um **access token** usando a API OAuth do GitHub.

3. **Geração e Armazenamento do Token**:

   - O token recebido do GitHub é usado para obter os dados básicos do usuário (nome, email, avatar, etc.).
   - Um token JWT é gerado pelo backend para autenticação nas próximas requisições.
   - O token JWT é armazenado em **cookies HTTP-only**, garantindo maior segurança contra ataques como XSS.

4. **Validação do Token em Rotas Protegidas**:

   - Um middleware verifica a validade do token JWT para todas as rotas protegidas.
   - Caso o token seja inválido ou ausente, o usuário é redirecionado para a tela de login.

5. **Logout**:
   - Endpoint para limpar os cookies, removendo o token do cliente e encerrando a sessão do usuário.

---

#### **Padronização de Commits**

1. **Instalação do Commitizen**:  
   Adicionei o Commitizen ao repositório para padronizar mensagens de commit no formato **Conventional Commits**.

2. **Verificação de Commits**:  
   Configurei ferramentas como **Husky** e **Lint-Staged** para garantir que apenas commits válidos sejam aceitos.

---

### Considerações do Dia 7

O dia de hoje foi um marco para o desenvolvimento do projeto. Concluí telas importantes no frontend e implementei o fluxo completo de autenticação com **GitHub Apps**, garantindo uma experiência de login segura e integrada. Além disso, a padronização dos commits trouxe mais organização e clareza ao histórico do repositório, melhorando a manutenção e colaboração no projeto.

---

## **Dia 8 - Tela de Administração, Ajustes na Home e Implementação de Templates**

### Introdução ao Dia 8

Hoje avancei no desenvolvimento da aplicação com foco na criação e gerenciamento de templates e na organização do fluxo administrativo. Concentrei-me em criar uma tela de administração restrita para usuários com permissões de administrador, além de realizar melhorias na home e nas rotas da API.

---

### Aprendizado do Dia 8

- **Frontend**:  
  Aprimorei o fluxo de gerenciamento de templates e conectei o frontend ao backend para buscar os dados do banco.
- **Backend**:  
  Configurei novas rotas para criar e buscar templates, além de preparar o backend para manipular os dados cadastrados.
- **Organização**:  
  Planejei melhorias futuras para edição e exclusão de templates, criando uma base sólida para adicionar funcionalidades posteriormente.

---

### Atividades no Projeto - Dia 8

#### **Tela de Administração**

1. **Acesso Restrito**:

   - Criei uma tela exclusiva para administradores, com autenticação e validação para acesso seguro.
   - Apenas usuários com permissão de administrador podem visualizar e utilizar essa tela.

2. **Controle de Portfólios**:

   - Adicionei funcionalidade para que o administrador possa adicionar novos portfólios ao projeto.
   - A interface permite visualizar todos os portfólios cadastrados no sistema, facilitando o gerenciamento.

3. **Botões de Edição e Exclusão**:
   - Adicionei botões para edição e exclusão de portfólios, mas a implementação dessas funcionalidades será realizada futuramente.

---

#### **Ajustes na Home**

1. **Exibição Dinâmica de Projetos**:
   - Ajustei a home para buscar os projetos diretamente do banco de dados.
   - Agora, a listagem de projetos é carregada dinamicamente, garantindo que as informações estejam sempre atualizadas.

---

#### **Criação e Visualização de Templates**

1. **Fluxo de Adição**:

   - Adicionei uma funcionalidade na tela de administração para criar novos templates e salvar no banco de dados.

2. **Visualização de Templates**:

   - Agora, consigo listar todos os templates já cadastrados no sistema na tela de administração.
   - Essa funcionalidade facilita o controle e a organização dos templates existentes.

3. **Rotas de API**:
   - Configurei as rotas do backend para:
     - **GET**: Buscar todos os templates cadastrados no banco.
     - **POST**: Criar novos templates com as informações enviadas pelo frontend.

---

### Planejamento Futuro

- Implementar as funcionalidades de edição e exclusão de templates, aproveitando os botões já adicionados à interface.
- Aprimorar o design das telas para proporcionar uma melhor experiência ao usuário, especialmente na área administrativa.

---

### Considerações do Dia 8

O dia de hoje foi focado em organizar o fluxo administrativo e estruturar o gerenciamento de portfólios e templates. A tela de administração trouxe um controle mais robusto, enquanto os ajustes na home conectaram a interface ao banco de dados, tornando o conteúdo dinâmico e atualizado. Com essas melhorias, o projeto está mais próximo de ser um produto funcional e escalável.
