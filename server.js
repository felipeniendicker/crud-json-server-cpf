// Importar as bibliotecas.
const jsonServer = require('json-server');
const express = require('express');

// Criar o servidor e o roteador, como no exemplo da aula.
const server = jsonServer.create();
const router = jsonServer.router(__dirname + '/db.json');
const middlewares = jsonServer.defaults({ static: __dirname + '/public' });
const app = express();

// O Express serve as páginas da pasta public.
app.use(express.static(__dirname + '/public'));
server.use(app);
server.use(middlewares);

// Ler o JSON enviado pelos formulários antes de usar o roteador.
server.use(jsonServer.bodyParser);
server.use(router);

const porta = process.env.PORT || 3000;
server.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});
