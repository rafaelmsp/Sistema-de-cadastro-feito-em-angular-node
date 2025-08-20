
### Cadastro em Angular com Node.js

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Sistema de Cadastro — Angular + Node.js</title>
</head>
<body>

  <h1>🆔 Sistema de Cadastro</h1>
  <p>
    Este projeto é um <strong>sistema de cadastro de usuários</strong>, desenvolvido com 
    <strong>Angular</strong> no frontend e <strong>Node.js</strong> no backend. 
    Ele serve como exemplo prático de integração entre frontend e backend em uma aplicação full-stack.
  </p>

  <h2>🚀 Tecnologias Utilizadas</h2>
  <ul>
    <li><strong>Frontend:</strong> Angular, TypeScript, HTML, CSS</li>
    <li><strong>Backend:</strong> Node.js + Express</li>
    <li><strong>Banco de Dados (opcional):</strong> MongoDB ou MySQL</li>
  </ul>

  <h2>📦 Estrutura do Projeto</h2>
  <pre>
Sistema-de-cadastro/
├── backend/    (Servidor Node.js com Express)
├── frontend/   (Aplicação Angular)
└── README.md   (Este arquivo)
  </pre>

  <h2>⚙️ Funcionalidades</h2>
  <ul>
    <li>Cadastro de usuários com nome, e-mail e senha</li>
    <li>Listagem de usuários cadastrados</li>
    <li>Atualização de dados de usuários</li>
    <li>Exclusão de registros</li>
    <li>Integração frontend ↔ backend via HTTP</li>
  </ul>

  <h2>🛠️ Como Rodar o Projeto</h2>

  <h3>Pré-requisitos</h3>
  <ul>
    <li><a href="https://nodejs.org/">Node.js</a> instalado</li>
    <li><a href="https://angular.io/cli">Angular CLI</a> instalado</li>
    <li>Banco de dados configurado (se desejar persistir dados)</li>
  </ul>

  <h3>Passo a Passo</h3>
  <ol>
    <li><strong>Clonar o repositório</strong>:
      <pre>git clone https://github.com/rafaelmsp/Sistema-de-cadastro-feito-em-angular-node.git
cd Sistema-de-cadastro-feito-em-angular-node</pre>
    </li>

    <li><strong>Configurar e rodar o backend</strong>:
      <pre>
cd backend
npm install
node index.js
      </pre>
      O servidor rodará em <code>http://localhost:3000</code>.
    </li>

    <li><strong>Configurar e rodar o frontend</strong>:
      <pre>
cd frontend
npm install
ng serve
      </pre>
      A aplicação estará disponível em <code>http://localhost:4200</code>.
    </li>
  </ol>

  <h2>📖 Exemplos de Rotas Backend</h2>
  <ul>
    <li><code>POST /usuarios</code> → cria um novo usuário</li>
    <li><code>GET /usuarios</code> → lista todos os usuários</li>
    <li><code>PUT /usuarios/:id</code> → atualiza usuário existente</li>
    <li><code>DELETE /usuarios/:id</code> → remove usuário</li>
  </ul>

  <h2>🤝 Contribuição</h2>
  <p>Para contribuir:</p>
  <ol>
    <li>Faça um fork deste repositório</li>
    <li>Crie uma branch: <code>git checkout -b feature/nova-feature</code></li>
    <li>Commit suas alterações: <code>git commit -m "Adiciona nova feature"</code></li>
    <li>Envie para o seu fork: <code>git push origin feature/nova-feature</code></li>
    <li>Abra um Pull Request</li>
  </ol>

  <h2>📄 Licença</h2>
  <p>Projeto licenciado sob a licença <strong>MIT</strong>.</p>

  <h2>👤 Autor</h2>
  <p>
    <strong>Rafael Moraes da Silva Passos</strong><br>
    🔗 <a href="https://github.com/rafaelmsp">GitHub</a>
  </p>

</body>
</html>




## Introdução
Bem-vindo ao tutorial de criação de um sistema de cadastro utilizando Angular como framework frontend e Node.js como backend. Este guia passo a passo ajudará você a entender como construir uma aplicação completa, permitindo aos usuários se cadastrarem e armazenarem informações.

## Requisitos Prévios
Antes de começarmos, certifique-se de ter o Node.js e o Angular CLI instalados em sua máquina. Caso ainda não tenha, você pode baixá-los nos seguintes links:

Node.js
Angular CLI
Configuração do Projeto
Crie um Projeto Angular:
Utilize o comando Angular CLI para criar um novo projeto Angular.

bash
Copy code
ng new meu-projeto-angular
cd meu-projeto-angular
Crie Componentes para Cadastro:
Gere componentes para lidar com o cadastro de usuários.

bash
Copy code
ng generate component cadastro-usuario
Configuração do Servidor Node.js:
Inicialize um projeto Node.js para o backend.

bash
Copy code
mkdir meu-projeto-node
cd meu-projeto-node
npm init -y
Instale o Express, um framework para construir aplicações web em Node.js.

bash
Copy code
npm install express --save
Desenvolvimento do Frontend (Angular)
Crie o Formulário de Cadastro:
No arquivo cadastro-usuario.component.html, desenvolva um formulário de cadastro com campos como nome, e-mail e senha.

## Integre o Serviço HTTP:
Utilize o Angular HTTP Client para enviar solicitações HTTP ao backend. No serviço Angular, faça chamadas para endpoints no backend Node.js.

## Desenvolvimento do Backend (Node.js)
Crie um Servidor Express:
No arquivo index.js ou server.js, configure um servidor Express básico.

javascript
Copy code
const express = require('express');
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
Configuração de Rotas:
Defina rotas para lidar com as operações CRUD (Create, Read, Update, Delete) relacionadas ao cadastro de usuários.

##Integre com um Banco de Dados (opcional):
Se desejar armazenar dados de usuários, integre o backend com um banco de dados como MongoDB ou MySQL.

## Executando o Projeto
Inicie o Servidor Node.js:
No diretório do projeto Node.js, execute o servidor.

bash
Copy code
node index.js
Inicie o Servidor Angular:
No diretório do projeto Angular, execute o aplicativo Angular.

bash
Copy code
ng serve
Acesse a Aplicação:
Abra o navegador e acesse http://localhost:4200 para visualizar a aplicação Angula
