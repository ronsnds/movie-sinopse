# Plataforma de Sinopse de Filmes

Este projeto é uma plataforma completa para cadastro e visualização de sinopses de filmes, composta por um backend em Node.js com MongoDB e um frontend em React + TypeScript utilizando Vite.

## Estrutura do Projeto

```
movie-sinopse/
│
├── mongo-api-movies/         # Backend Node.js + Express + Mongoose
│   ├── src/
│   │   ├── index.js
│   │   └── model.js
│   ├── .env
│   └── package.json
│
└── movie-sinopse-front/      # Frontend React + TypeScript + Vite
    ├── src/
    │   ├── App.tsx
    │   └── ...
    ├── index.html
    └── package.json
```

## Funcionalidades

- Cadastro de filmes com título, tema, sinopse e imagem.
- Listagem dos filmes cadastrados.
- Integração entre frontend e backend via API REST.

## Como rodar o projeto

### 1. Backend

1. Acesse a pasta do backend:
   ```sh
   cd mongo-api-movies
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Configure o arquivo `.env` com a string de conexão do MongoDB.
4. Inicie o servidor:
   ```sh
   npm start
   ```
   O backend estará disponível em `http://localhost:3000`.

### 2. Frontend

1. Acesse a pasta do frontend:
   ```sh
   cd movie-sinopse-front
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```
   O frontend estará disponível em `http://localhost:5173`.

## Tecnologias Utilizadas

- **Backend:** Node.js, Express, Mongoose, MongoDB
- **Frontend:** React, TypeScript, Vite

## Observações

- Certifique-se de que o backend esteja rodando antes de utilizar o frontend.
- O frontend faz requisições para `http://localhost:3000/`.

## Licença

Este projeto está licenciado sob os termos da licença MIT.
