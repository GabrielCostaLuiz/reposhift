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

<<<<<<< HEAD
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
=======
Um adendo: Alem do curso da rocketseat eu comprei a do curso.dev e o Filipe Deschamps é outro professor excepcional, sempre pulava os videos dele por ser videos mais tecnicos e de nivel mais pleno/senior, antes eu queria somente fazer minhas Pokedex e não pensar nas partes mais dificeis da programação, pois escrever um codigo todo mundo sabe, mas e a parte mais densa de (coloque aqui uma palavra ou frase em realação ao que estou querendo dizer gpt), de ser realmente um Dev competente com foco muito grande na parte tecnica, então eu sempre estarei comentando ele, pois estou construindo esse SaaS através do curso.dev, que vejo como um curso muito mas muito valioso para qualquer tipo de Dev, pois ele traz uma didatica incrivel e ensinamentos valiosos para o crescimento com o Dev. Então esse foi mais um dos passos que eu dei para me tornar um Dev melhor que sou hoje.
Sempre irei iniciar falando o que aprendi assistindo os videos dele que normalmente assisto na ida e volta do trabalho e depois o que implementei no projeto
Tentarei trazer atualizações diarias, porem as vezes possa ser que eu não traga, porem o cronograma continuara na sequencia do dia anterior.

<<<<<<< HEAD
Dia 1° -
=======
### Um adendo:

Além do curso da Rocketseat, comprei também o curso.dev, e o Filipe Deschamps é outro professor excepcional. Sempre pulava os vídeos dele por serem mais técnicos e de nível mais pleno/sênior. Antes, eu queria apenas fazer minhas Pokedex e não pensar nas partes mais difíceis da programação. Pois, escrever um código todo mundo sabe, mas e a parte mais densa da programação, de se tornar realmente um desenvolvedor competente com um foco muito grande na parte técnica? Então, comecei a acompanhar as aulas dele e sempre comento o que aprendi e como implementei isso no projeto.
>>>>>>> 7585e20 (Cria a pagina em construção do nextjs)

Estou construindo este SaaS com base no conteúdo do curso.dev, que considero extremamente valioso para qualquer desenvolvedor. Ele traz uma didática incrível e ensinamentos essenciais para o crescimento como dev.

Sempre que aprender algo novo nas aulas do Filipe, vou compartilhar aqui o que implementei no projeto.

---

### Atualizações Diárias:

Tentarei trazer atualizações diárias, mas pode ser que, em alguns dias, eu não consiga. No entanto, o cronograma seguirá a sequência do dia anterior.

---

## **Dia 1**:

### Introdução

Primeiro dia de programação do meu SaaS. Estava realmente animado, até porque no dia anterior (que na verdade era o mesmo dia de hoje 😂) eu fui dormir às 3h da manhã, sabendo que tinha que acordar às 6h. Estava procurando nomes, conversando com o GPT para alinhar algumas ideias, escolhendo cores e outras coisas que sempre imaginamos quando queremos começar um projeto, né? 😅

No entanto, decidi dar um passo de cada vez para não me sobrecarregar e acabar me desmotivando com a grande demanda. A ideia era não me frustrar por não conseguir concluir metade das tarefas no primeiro dia e desistir.

### Aprendizado

Logo cedo, indo para o trabalho, fui assistindo as aulas do Filipe Deschamps. E à tarde, voltando do trabalho, também continuei assistindo as aulas. As aulas de hoje foram mais tranquilas, pois já tinha conhecimento sobre Git, GitHub e deploy na Vercel. Uma das novidades foi aprender sobre **Issues** e **Milestones** no GitHub.

Comecei criando o repositorio RepoShift e criei algumas Issues e Milestones, logo em seguida fui concluindo algumas delas, a primeira Milestones foi a de "Em Construção" e vinculei algumas Issues a ela para conclui-las.
Criei o projeto com TurboRepo, utilizei as configurações que aprendi no video da RocketSeat que tive a ideia desse SaaS e subi o projeto para o GitHub
>>>>>>> b4af4a5 (chore: cria o arquivo README.md)
