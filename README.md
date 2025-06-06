# 📘 Projeto DevOps - Calculadora Remota com Docker e Banco de Dados
# Feito por: Esdras Teixeira de Lucena
# Matrícula: 2023111510114
# P5A - Sistemas para internet

Este é um projeto simples de calculadora remota que inclui:

- Frontend (HTML/CSS/JS puro)
- Backend (Node.js + Express + Prisma)
- Banco de dados PostgreSQL
- Docker e Docker Compose para orquestração

O funcionamento se dá através da seguinte forma:

# frontend → faz requisições HTTP
# backend → usa Prisma para se comunicar com o banco
# banco de dados PostgreSQL → armazena os cálculos
# Tudo rodando com docker compose

---

## 🚀 Como rodar o projeto

### 1. Pré-requisitos
Certifique-se de ter os seguintes softwares instalados:

- Docker e Docker compose - necessário para rodar os containers
- Node.js e npm (caso queira rodar localmente fora do Docker)

---

### 2. Clonar o repositório

git clone [<url-do-repositorio>](https://github.com/EsdrasLucena/ProjetoDevops---Calculadora.git)
cd ProjetoDevops---Calculadora

### 3. Estrutura do projeto

ProjetoDevops---Calculadora/
├── backEnd/
│   └── prisma/
│       └── schema.prisma
│       └── migrations
│   ├── db.json
│   ├── dockerfile
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
├── frontEnd/
│   └── dockerfile
│   ├── index.html
│   ├── script.js
│   ├── style.css
├── DESENVOLVIMENTO.md
├── docker-compose.yml
├── README.md


### 4. Comando para rodar o projeto com Docker

docker compose up --build

- Para rodar o docker em segundo plano use:

docker compose up --build -d

Aguarde os containers iniciarem. Acesse pelo navegador (Mas ainda não use a calculdaora, é preciso rodar as migrations antes)

- **Frontend:** [http://localhost:8080](http://localhost:8080)

Os comandos da calculadora funcionam tanto com o clique do mouse como digitando pelo teclado.

### 5. Rodar as migrations do banco de dados
Depois de executar docker compose up --build, o banco de dados vai estar rodando, assim como o backend.
Mas, o Prisma ainda não criou automaticamente as tabelas no banco, então é necessário rodar manualmente as migrations dentro do container backend.

Só é preciso rodar esse comando apenas na primeira vez para criar as tabelas no banco.

# Aqui tu vai ta acessando o container do backend primeiramente
docker exec -it backend sh
# Aqui rodando as migrations
npx prisma migrate dev --name init

# Porque eu não automatizei isso no dockerfile?
Automatizar isso no meu dockerfile exigiria garantir que o banco já estivesse pronto (o container do PostgreSQL já teria que ter iniciado), o que geralmente exige algum script de espera (wait-for-it.sh por exemplo). Poderia acontecer alguma imprevisibilidade e risco de falha na ordem de inicialização. Achei melhor ter que executar os comandos mesmo pra não dar problema.


## 🧮 Como usar
- A calculadora permite somar, subtrair, multiplicar e dividir dois números.
- O histórico de cálculos é salvo no banco de dados PostgreSQL.
- Os últimos 10 cálculos são exibidos automaticamente na tela pelo histórico ao lado da calculadora


## 🛠️ Tecnologias utilizadas
- HTML/CSS/JavaScript
- Node.js + Express
- PostgreSQL
- Prisma ORM
- Docker e Docker Compose