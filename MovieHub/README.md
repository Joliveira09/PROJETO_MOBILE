# Movie Hub

## Sobre o projeto

Aplicativo mobile desenvolvido para gerenciamento, busca, organização e compartilhamento de filmes.

---

## Funcionalidades

* Autenticação de Usuários: Login e cadastro de conta na plataforma.

* Pesquisa e Filtros: Busca rápida de filmes com suporte a filtros dinâmicos.

* Adição e Edição de Filmes: Funcionalidades para cadastrar novos filmes e editar informações existentes.

* Detalhes do Filme: Visualização completa de dados de cada filme adicionado.

* Favoritos: Marque e acesse rapidamente seus filmes preferidos.

* Compartilhamento: Compartilhe informações de filmes com outras pessoas.

* Remoção: Exclusão simples de filmes da sua lista.

---

## Tecnologias Utilizadas

* React Native: Framework para desenvolvimento mobile multiplataforma.

* TypeScript: Tipagem estática para maior segurança e produtividade no código.

* Expo: Plataforma e ecossistema para facilitar a criação e testes do app React Native.

* Git: Sistema de controle de versão utilizado para acompanhar e gerenciar as alterações realizadas no código.

* GitHub: Plataforma utilizada para hospedagem do código-fonte, colaboração e gerenciamento do repositório.

* Node.js: Ambiente de execução utilizado para executar o JavaScript e gerenciar as dependências do projeto.

* CSS: Linguagem utilizada para estilização e definição da aparência das interfaces da aplicação.

---

## Estrutura do Projeto

```text
MovieHub/

├── assets/

│   └── images/               # Imagens e ícones utilizados na aplicação

│       ├── adaptive-icon.png

│       ├── camera.png

│       ├── favicon.png

│       ├── icon.png

│       ├── logoApp.png

│       ├── splash-icon.png

│       └── Youtube_logo.png

└── src/

    ├── routes/               # Configuração das rotas e navegação da aplicação

    │   ├── index.jsx

    │   └── tab.routes.jsx

    └── screens/              # Telas do aplicativo

        ├── addMovies/        # Tela para adicionar novos filmes

        ├── cadastro/         # Tela de cadastro de novos usuários

        ├── compartilharMovies/# Tela para compartilhar filmes

        ├── editar/           # Tela de edição de filmes

        ├── favorites/        # Tela de filmes favoritados

        ├── filter/           # Tela/modal de filtragem de filmes

        ├── home/             # Tela principal (Home)

        ├── infoMovies/       # Tela de detalhes/informações do filme

        ├── login/            # Tela de autenticação/login

        └── movies/           # Tela com a listagem de filmes
```

## Como executar o projeto

### Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

* Node.js
* npm
* Expo
* Expo Go, caso queira executar o aplicativo em um dispositivo físico.

### Instalação

Clone o repositório:

git clone URL_DO_REPOSITORIO

Entre na pasta do projeto:

cd MovieHub

Instale as dependências:

npm install

Inicie o projeto:

npx expo start

Depois, você poderá executar o aplicativo utilizando o Expo Go ou um emulador Android/iOS.

---

## Autor

* Juan Pablo da Silva de Oliveira