function buscarDados() {
    const cpf = document.getElementById('cpfBusca').value;
    document.getElementById('formulario').reset();
    document.getElementById('campos').disabled = true;
    document.getElementById('mensagem').textContent = '';

    fetch('/pessoas')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição.');
        }
        return response.json();
    })
    .then(data => {
        const pessoaEncontrada = data.find(pessoa => pessoa.cpf === cpf);
        if (pessoaEncontrada) {
            document.getElementById('id').value = pessoaEncontrada.id;
            document.getElementById('nome').value = pessoaEncontrada.nome;
            document.getElementById('sobrenome').value = pessoaEncontrada.sobrenome;
            document.getElementById('email').value = pessoaEncontrada.email;
            document.getElementById('idade').value = pessoaEncontrada.idade;
            document.getElementById('telefone').value = pessoaEncontrada.telefone;
            document.getElementById('rua').value = pessoaEncontrada.rua;
            document.getElementById('bairro').value = pessoaEncontrada.bairro;
            document.getElementById('cidade').value = pessoaEncontrada.cidade;
            document.getElementById('estado').value = pessoaEncontrada.estado;
            document.getElementById('rg').value = pessoaEncontrada.rg;
            document.getElementById('cpf').value = pessoaEncontrada.cpf;
            document.getElementById('campos').disabled = false;
        } else {
            document.getElementById('mensagem').textContent = 'Pessoa não encontrada!';
        }
    })
    .catch(() => {
        document.getElementById('mensagem').textContent = 'Erro ao buscar pessoa.';
    });
}

function atualizarDados() {
    const id = document.getElementById('id').value;
    if (!id) {
        document.getElementById('mensagem').textContent = 'Busque uma pessoa pelo CPF primeiro.';
        return;
    }
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;
    const telefone = document.getElementById('telefone').value;
    const rua = document.getElementById('rua').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const rg = document.getElementById('rg').value;
    const cpf = document.getElementById('cpf').value;

    fetch(`/pessoas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, sobrenome, email, idade, telefone, rua, bairro, cidade, estado, rg, cpf })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição.');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('formulario').reset();
        document.getElementById('campos').disabled = true;
        document.getElementById('mensagem').textContent = 'Cadastro atualizado com sucesso!';
    })
    .catch(() => {
        document.getElementById('mensagem').textContent = 'Erro ao atualizar pessoa.';
    });
}
