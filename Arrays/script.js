let loginsCadastrados = [];
let senhasCadastradas = [];

function entrar() {
    let login = document.getElementById('username').value;
    let senha = document.getElementById('password').value;
    
    let index = loginsCadastrados.indexOf(login);
    if (index !== -1 && senhasCadastradas[index] === senha) {
        window.location.href = 'logado.html';
    } else {
        document.getElementById('mensagem').textContent = 'Login e/ou senha incorretos.';
    }

    
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

function cadastrar() {
    let loginNovo = document.getElementById('username').value;
    let senhaNova = document.getElementById('password').value;

    
    if (loginsCadastrados.includes(loginNovo)) {
        document.getElementById('mensagem').textContent = 'Usuário já cadastrado.';
    } else {
        
        loginsCadastrados.push(loginNovo);
        senhasCadastradas.push(senhaNova);
        document.getElementById('mensagem').textContent = 'Cadastro concluído.';
    }

    
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}
