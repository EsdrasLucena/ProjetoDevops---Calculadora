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

Aguarde os containers iniciarem. Acesse pelo navegador:

- **Frontend:** [http://localhost:8080](http://localhost:8080)

Os comandos da calculadora funcionam tanto com o clique do mouse como digitando pelo teclado.

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