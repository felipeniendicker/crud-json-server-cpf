function enviarDados() {
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

    fetch('/pessoas', {
        method: 'POST',
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
        document.getElementById('mensagem').textContent = 'Cadastro realizado com sucesso!';
    })
    .catch(() => {
        document.getElementById('mensagem').textContent = 'Erro ao cadastrar pessoa.';
    });
}
