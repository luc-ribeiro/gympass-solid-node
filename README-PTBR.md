<h1 align="center">
GymPass API SOLID Node.js
<br>
<br>
</h1>

<div align="right">
  Click <a href="https://github.com/luc-ribeiro/gympass-solid-node/blob/main/README.md">here</a> to view the english version.
</div>
<br>

## 💻 Projeto
Este projeto foi criado durante o curso de Node.js da Rocketseat.

O projeto consiste na criação de uma API REST para check-ins em academias, aplicando conceitos de **SOLID e Design Patterns**. Utilizando tecnologias como <strong>Fastify, Prisma ORM, Vitest e Docker</strong>.
O objetivo é praticar a criação de APIs com a utilização desses conceitos e tecnologias, e também, enfatizar a importância de <strong>criar uma aplicação bem estruturada e de fácil manutenibilidade.</strong>

## 🚀 Tecnologias

- **Node.js** 
- **TypeScript**
- **Fastify**
- **Prisma ORM**
- **Docker**
- **Vitest**
- **CI/CD**
- **Zod**
- **PostgreSQL**

## :pencil: Conceitos

- **SOLID**
- **Testes E2E e Unitários**
- **TDD**
- **Design Patterns**: Factory, Adapter, Repository
- **InMemoryTestDatabase**
- **RBAC**
- **Refresh Token**

## :page_facing_up: Como utilizar

- Faça um clone deste repositório:

```sh
  $ git clone https://github.com/luc-ribeiro/gympass-solid-node.git
```

- Instale as dependências:

```sh
  # com npm
  $ npm install

  # com yarn
  $ yarn install
```

- Crie um arquivo ```.env``` seguindo a estrutura do ```.env.example```

- É importante que a URL do Banco de Dados seja a mesma que a do arquivo ```docker-compose.yaml```, ou vice-versa

- Rode o Docker Compose para iniciar o container com o Banco de Dados:

```sh
  $ docker compose up
```

- Rode as migrations:

```sh
  # com npm
  $ npx prisma db push

  # com yarn
  $ yarn prisma db push
```

- Execute o comando:

```sh
  # com npm
  $ npm run dev

  # com yarn
  $ yarn dev
```

- O projeto rodará em `localhost:3333`

- Para visualizar o Banco de Dados:

```sh
  # com npm
  $ npx prisma studio

  # com yarn
  $ yarn prisma studio
```
