# CRUD - Cadastro de Pessoas

Atividade com HTML, CSS, JavaScript, Express e JSON Server.

## Executar localmente

Com Node.js e npm instalados, abra o terminal nesta pasta e execute:

```sh
npm install
node server.js
```

Acesse http://localhost:3000. Para encerrar, pressione Ctrl+C.
Também é possível iniciar com `npm start`.

## Testar

1. Em **Cadastrar**, preencha os 11 campos e clique em **Cadastrar**.
2. Em **Listar**, confira os dados na tabela.
3. Digite o CPF cadastrado e clique em **Buscar**. Use a mesma pontuação do cadastro. Clique em **Listar todos** para voltar à lista completa.
4. Em **Atualizar**, busque o CPF, altere os dados carregados e clique em **Atualizar**. Confira a alteração em **Listar**.
5. Em **Excluir**, informe o CPF e clique em **Excluir**. Confira que ele saiu da lista.
6. Busque um CPF inexistente nas páginas Listar e Atualizar e tente excluí-lo: deve aparecer "Pessoa não encontrada!".

## GitHub e Render

O projeto está pronto para ser enviado ao GitHub manualmente. A pasta `node_modules` é ignorada pelo Git; mantenha `package-lock.json` no repositório.

No Render, crie um Web Service conectado ao repositório, usando Node:

- Comando de build: `npm install`
- Comando de inicialização: `node server.js`

O servidor usa `process.env.PORT` e, localmente, a porta 3000. As páginas e a API funcionam no mesmo servidor.
O `db.json` precisa ser gravável. Em hospedagem com disco efêmero, alterações nesse arquivo podem ser perdidas após reinícios ou novas publicações; este projeto usa o arquivo local conforme a atividade.

## Sobre o exemplo da aula

Foram mantidos `jsonServer.create()`, o roteador de `db.json`, funções simples com `fetch` e a busca por CPF com `find`. Atualização e exclusão usam o ID encontrado.
O Express do exemplo era criado, mas não era conectado ao servidor iniciado; agora ele serve a pasta `public` no mesmo servidor.
Foi incluído o middleware que lê os corpos JSON de POST e PUT.
A versão 0.17.4 do JSON Server mantém a API utilizada pelo professor.
O ZIP original não incluía `package.json` nem `Dockerfile`.
