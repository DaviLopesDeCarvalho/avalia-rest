# 🍔 AvaliaRest - Sistema de Avaliação de Restaurantes

**Desenvolvedores:** Davi Lopes de Carvalho e Luiz Henrique Bayma Martins

---

# 📖 Sobre o Projeto

O **AvaliaRest** é uma Single Page Application (SPA) desenvolvida em React como requisito avaliativo da disciplina **ADSDM2B** do **IESB**.

A aplicação simula um sistema de recomendação e avaliação gastronômica, permitindo cadastrar, visualizar e explorar restaurantes através de uma interface moderna, responsiva e integrada a uma API REST mockada.

O projeto foi desenvolvido seguindo um ciclo ágil de 8 semanas, aplicando conceitos de:

* Componentização
* Gerenciamento de Estado Global
* Navegação SPA
* Validação de Formulários
* Integração com APIs REST
* Clean Code
* Versionamento com Git e GitHub

---

# 🚀 Tecnologias Utilizadas

* React 18
* Vite
* React Router DOM
* Context API
* Axios
* React Hook Form
* Zod
* JSON Server
* CSS Global (Flexbox + Grid)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)

![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge\&logo=vite\&logoColor=FFD62E)

![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge\&logo=react-router\&logoColor=white)

![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge\&logo=zod\&logoColor=white)

---

# ✨ Funcionalidades

## 🏠 Página Inicial

* Banner de apresentação do sistema
* Exibição automática dos 3 restaurantes mais bem avaliados

## 📋 Listagem de Restaurantes

* Renderização dinâmica dos dados vindos da API
* Exibição através de componentes reutilizáveis

## ➕ Cadastro de Restaurantes

* Formulário controlado
* Validação robusta utilizando React Hook Form + Zod
* Prevenção de envio de dados inválidos

## 🌐 Navegação SPA

* Navegação sem recarregamento da página
* Implementação utilizando React Router

## 🔄 Estado Global Compartilhado

* Gerenciamento de dados através da Context API
* Atualização automática da interface após novos cadastros

## 🔌 Integração REST

* Consumo de API simulada utilizando JSON Server
* Operações de leitura e gravação de dados

## ⚠️ Tratamento de Rotas Inválidas

* Página personalizada Not Found (404)
* Captura automática de URLs inexistentes

---

# 🏗️ Arquitetura

A aplicação utiliza uma arquitetura baseada em componentes funcionais do React.

### Frontend

* React 18
* Vite
* React Router DOM

### Gerenciamento de Estado

* Context API

### Comunicação HTTP

* Axios

### Validação

* React Hook Form
* Zod

### Backend Simulado

* JSON Server

---

# 📁 Estrutura do Projeto

```text
src/
├── components/
│   ├── Navbar.jsx
│   └── RestaurantCard.jsx
│
├── context/
│   └── RestaurantContext.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Cadastro.jsx
│   ├── Listagem.jsx
│   └── NotFound.jsx
│
├── services/
│   └── api.js
│
├── styles/
│   └── global.css
│
├── App.jsx
└── main.jsx
```

---

# 🛠️ Pré-requisitos

Antes de executar o projeto, certifique-se de possuir:

* Node.js (versão LTS recomendada)
* Git

Verifique as versões instaladas:

```bash
node -v
npm -v
git --version
```

---

# 🚀 Como Executar o Projeto

## Método 1 — Execução Simplificada (Recomendado)

Clone o repositório:

```bash
git clone https://github.com/DaviLopesDeCarvalho/avalia-rest.git
```

Entre na pasta do projeto:

```bash
cd avalia-rest
```

Instale as dependências:

```bash
npm install
```

Execute:

```bash
npm start
```

Este comando inicia simultaneamente:

* Frontend React (Vite)
* Backend Mock (JSON Server)

---

## Método 2 — Execução Manual

Clone o repositório:

```bash
git clone https://github.com/DaviLopesDeCarvalho/avalia-rest.git
cd avalia-rest
```

Instale as dependências:

```bash
npm install
```

### Terminal 1

Inicie o JSON Server:

```bash
npm run server
```

### Terminal 2

Inicie o React:

```bash
npm run dev
```

---

# 🌐 Endereços da Aplicação

Frontend:

```text
http://localhost:5173
```

API REST:

```text
http://localhost:3333/restaurants
```

---

# ⚠️ Tratamento de Erros

O sistema possui uma rota de fallback configurada através do React Router:

```jsx
<Route path="*" element={<NotFound />} />
```

Sempre que o usuário acessar uma URL inexistente, será exibida uma página personalizada **404 - Página Não Encontrada**.

Exemplo:

```text
http://localhost:5173/rota-inexistente
```

---

# 📚 Conceitos Aplicados

* Single Page Application (SPA)
* Componentização
* Context API
* React Hooks
* Axios
* Consumo de APIs REST
* Formulários Controlados
* Validação de Dados
* Responsividade
* Clean Code
* Git Flow
* Versionamento Semântico

---

# 🎯 Objetivo Acadêmico

O projeto foi desenvolvido para atender aos requisitos avaliativos da disciplina **ADSDM2B**, demonstrando conhecimentos em desenvolvimento Frontend moderno utilizando React e boas práticas de engenharia de software.

---

# 👨‍💻 Autores

**Davi Lopes de Carvalho**

**Luiz Henrique Bayma Martins**

IESB — Análise e Desenvolvimento de Sistemas
