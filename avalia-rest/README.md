# 🍔 AvaliaRest - Sistema de Avaliação de Restaurantes

*Desenvolvedores:* Davi Lopes de Carvalho e Luiz Henrique Bayma Martins

## 🚀 Tecnologias Utilizadas
* *React + Vite*
* *React Router Dom* (Navegação SPA)
* *Context API* (Gerenciamento de Estado Global)
* *Axios* (Consumo da API REST simulada)
* *React Hook Form + Zod* (Formulários Controlados e Validação Robusta)
* *JSON Server* (Mock do Banco de Dados Local)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![React Router Dom](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)

Projeto acadêmico desenvolvido como requisito avaliativo para a disciplina de *ADSDM2B* do *IESB. O **AvaliaRest* é uma Single Page Application (SPA) construída em React que simula um sistema real de recomendação e avaliação gastronômica.

O projeto foi gerenciado através de um ciclo ágil de 8 semanas, aplicando boas práticas de versionamento (Commits Atômicos), componentização modular e Clean Code.

---

## ✨ Funcionalidades

* *Navegação SPA:* Transições fluidas entre telas sem recarregamento (React Router).
* *Vitrine Dinâmica (Home):* Banner de destaque e listagem automática dos Top 3 restaurantes mais bem avaliados.
* *Catálogo e Filtros:* Grade responsiva de restaurantes com busca em tempo real por nome e filtro por categoria.
* *Cadastro e Validação:* Formulário controlado e blindado contra dados inválidos (React Hook Form + Zod).
* *Estado Global Compartilhado:* Inserção de novos dados refletida instantaneamente em toda a aplicação via Context API (sem prop drilling ou cascading renders).
* *Integração REST:* Consumo de API mockada (JSON Server) com tratamento de erros e estados de carregamento (Loading).

---

## 🛠️ Tecnologias e Arquitetura

A arquitetura foi desenhada com foco em alta coesão e baixo acoplamento, separando regras de negócio, interface e serviços de rede:

* *Frontend:* React 18 (via Vite), utilizando Functional Components e Hooks.
* *Roteamento:* React Router Dom v6.
* *Gerenciamento de Estado:* Context API nativa do React.
* *Cliente HTTP:* Axios (com instância e baseURL isoladas).
* *Formulários:* React Hook Form integrado ao Zod (Schema Validation).
* *Backend (Mock):* JSON Server simulando requisições REST (GET, POST).
* *Estilização:* CSS Global puro com CSS Variables, Flexbox e CSS Grid para responsividade Mobile-First extrema.

---

## 🚀 Como Executar o Projeto Localmente

Para rodar a aplicação em sua máquina, certifique-se de ter o *Node.js* instalado.
## 🛠️ Como rodar o projeto localmente

**1. Instale as dependências:
   \\\`bash
   npm install
   npm install react-router-dom axios react-hook-form @hookform/resolvers zod
   npm install -D json-server
   \\\`

*2 Clone o repositório:*
```bash
git clone https://github.com/DaviLopesDeCarvalho/avalia-rest.git
cd avalia-rest

**3. Inicie o Banco de Dados Local (JSON Server):
   \\\`bash
   npm run server
   \\\`

4. Em um novo terminal, inicie a aplicação React:
   \\\`bash
   npm run dev
   \\\`