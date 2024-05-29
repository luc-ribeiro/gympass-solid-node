<h1 align="center">
GymPass API SOLID Node.js
<br>
<br>
</h1>

<div align="right">
    Clique <a href="https://github.com/luc-ribeiro/gympass-solid-node/blob/main/README-PTBR.md">aqui</a> para ver a versão em Português.
</div>
<br>

## 💻 Project
The project involves creating a REST API for gym check-ins, applying **SOLID and Design Patterns** concepts. It uses technologies like **Fastify, Prisma ORM, Vitest, and Docker**.
The goal is to practice creating APIs using these concepts and technologies, and also emphasize the importance of **building a well-structured and easily maintainable application**.

## 🚀 Technologies

- **Node.js** 
- **TypeScript**
- **Fastify**
- **Prisma ORM**
- **Docker**
- **Vitest**
- **CI/CD**
- **Zod**
- **PostgreSQL**

## :pencil: Concepts

- **SOLID**
- **E2E and Unit Tests**
- **TDD**
- **Design Patterns**: Factory, Adapter, Repository
- **InMemoryTestDatabase**
- **RBAC**
- **Refresh Token**

## :page_facing_up: How to Use

- Clone this repository:

```sh
  $ git clone https://github.com/luc-ribeiro/gympass-solid-node.git
```

- Install the dependencies:

```sh
  # with npm
  $ npm install

  # with yarn
  $ yarn install
```

- Create a ```.env``` file following the structure of ```.env.example```

- It's important that the Database URL is the same as in the ```docker-compose.yaml``` file, or vice versa

- Run Docker Compose to start the container with the Database:

```sh
  $ docker compose up
```

- Run the migrations:

```sh
  # with npm
  $ npx prisma db push

  # with yarn
  $ yarn prisma db push
```

- Run the project:

```sh
  # with npm
  $ npm run dev

  # with yarn
  $ yarn dev
```

- The project will run on `localhost:3333`

- To visualize the Database:

```sh
  # with npm
  $ npx prisma studio

  # with yarn
  $ yarn prisma studio
```
