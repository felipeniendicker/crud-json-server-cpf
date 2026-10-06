function mostrarDados(pessoas) {
    const tabela = document.getElementById('tabela-corpo');
    tabela.textContent = '';
    pessoas.forEach(pessoa => {
        const linha = document.createElement('tr');
        const valores = [pessoa.id, pessoa.nome, pessoa.sobrenome, pessoa.email, pessoa.idade, pessoa.telefone, pessoa.rua, pessoa.bairro, pessoa.cidade, pessoa.estado, pessoa.rg, pessoa.cpf];
        valores.forEach(valor => {
            const coluna = document.createElement('td');
            coluna.textContent = valor;
            linha.appendChild(coluna);
        });
        tabela.appendChild(linha);
    });
}

function listarDados() {
    fetch('/pessoas')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição.');
        }
        return response.json();
    })
    .then(data => {
        mostrarDados(data);
        document.getElementById('cpfBusca').value = '';
        document.getElementById('mensagem').textContent = data.length ? '' : 'Nenhuma pessoa cadastrada.';
    })
    .catch(() => {
        document.getElementById('mensagem').textContent = 'Erro ao listar pessoas.';
    });
}

function buscarDados() {
    const cpf = document.getElementById('cpfBusca').value;
    fetch('/pessoas')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição.');
        }
        return response.json();
    })
    .then(data => {
        const pessoaEncontrada = data.find(pessoa => pessoa.cpf === cpf);
        mostrarDados(pessoaEncontrada ? [pessoaEncontrada] : []);
        document.getElementById('mensagem').textContent = pessoaEncontrada ? '' : 'Pessoa não encontrada!';
    })
    .catch(() => {
        document.getElementById('mensagem').textContent = 'Erro ao buscar pessoa.';
    });
}

listarDados();
