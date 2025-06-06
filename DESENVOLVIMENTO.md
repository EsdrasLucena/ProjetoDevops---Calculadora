### Planejamento do projeto:

Para o projeto, como o foco era a dockerização e conhecimento em containers e boas práticas, resolvi criar algo muito simples como uma calculadora online com operações básicas.
A duração do projeto foi de 2 dias, como fiz sozinho, não utilizei metodologias ágeis como scrum.

# A estruturação do projeto está bem separada em backend, frontend e banco de dados.

. O backend foi inteiramente desenvolvido em javascript.
. O frontend também foi desenvolvido em javascript, complementando com html e css.
. Utilizei o node.js para execução e express como framework para facilitar os requests de api e http com node.
. Para o banco de dados, utilizei o postgreSQL e prisma para mapear tabelas do banco de dados como objetos javaScript, facilitando o acesso ao banco e a manipulação de dados.
  Descobri o prisma fazendo o projeto da disciplina de programação mobile, o projeto já tinha o banco integrado utilizando prisma e resolvi usar também o que me poupou bastante tempo de pensar em como fazer rodar o banco de dados.

# Os passos seguidos no desenvolvimento foram:
. Planejamento e criação do projeto separando backend e frontend (Primeiro commit).
. Dockerização de tudo isso (Segundo commit).
. Por fim, criei o banco de dados e fiz as conexões necessárias (último commit).

Apesar de ser a primeira experiência mexendo com docker, achei na verdade a estruturação muito simples e fácil de entender.
Sobre os desafios, quando pedi pra um amigo tentar rodar o meu projeto na maquina dele, foi encontrado um erro, os containers de frontend e banco de dados subiam normalmente, mas o container de backend encontrava erro ao tentar encontrar o package express. Isso porque o meu dockerfile do backend usava npm install pra instalar as dependencias antes de copiar o package.json corretamente.
Fiz a correção adicionando o comando copy package*.json ./ garantindo que meu npm install funcionasse, pois ele precisava dos arquivos package.json e package-lock.json.

# Através das modificações no arquivo docker-compose-yml eu:
. Criei um serviço db com a imagem oficial do PostgreSQL.
. Adicionei o banco como dependência do backend.
. Criei uma variável DATABASE_URL com o caminho do banco para o Prisma usar.

### Resumo Técnico do Projeto

# O projeto contém:

- Uso adequado de volumes no docker
- Boas práticas de desenvolvimento e containerização
    . Separação clara entre frontend, backend e banco.
    . Backend isolado, com dependências instaladas apenas no container.
    . Dockerfile enxuto e eficiente.
- Uso de variáveis de ambiente com .env
    .  Está usando .env para definir DATABASE_URL e o PostgreSQL (POSTGRES_USER, POSTGRES_PASSWORD, etc.).
    . Backend está configurado para ler via Prisma.

# O projeto não possui:

- Testes automatizados (Mas pretendo incluir posteriormente para praticar)
- Logs organizados (O backend atualmente só faz logs simples com console.log)