function deletarDados() {
    const cpf = document.getElementById('cpf').value;

    fetch('/pessoas')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição.');
        }
        return response.json();
    })
    .then(data => {
        const pessoaEncontrada = data.find(pessoa => pessoa.cpf === cpf);
        if (!pessoaEncontrada) {
            document.getElementById('mensagem').textContent = 'Pessoa não encontrada!';
            return;
        }

        // A busca usa o CPF; a exclusão usa o ID encontrado.
        return fetch(`/pessoas/${pessoaEncontrada.id}`, { method: 'DELETE' })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição.');
            }
            document.getElementById('cpf').value = '';
            document.getElementById('mensagem').textContent = 'Cadastro excluído com sucesso!';
        });
    })
    .catch(() => {
        document.getElementById('mensagem').textContent = 'Erro ao excluir pessoa.';
    });
}
