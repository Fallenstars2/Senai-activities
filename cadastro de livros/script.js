
function login() {
    let login = document.getElementById("login").value;
    let senha = document.getElementById("password").value;
    let mensagem = "Usuário ou senha incorreta!";

    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));

    if (bancoDeDados == null) {
        mensagem = "Nenhum usuário cadastrado até o momento";
    } else {
        let usuarioEncontrado = bancoDeDados.find(usuario => usuario.login === login && usuario.senha === senha);

        if (usuarioEncontrado) {
            mensagem = "Parabéns, você logou!";
            localStorage.setItem("logado", JSON.stringify(usuarioEncontrado));
            document.getElementById("livroForm").style.display = "block"; 
        }
    }

    alert(mensagem);
}


function cadastra() {
    let novoLogin = document.getElementById("novoLogin").value;
    let novaSenha = document.getElementById("novaSenha").value;
    let repSenha = document.getElementById("repSenha").value;

    if (novaSenha === repSenha) {
        let usuario = {
            login: novoLogin,
            senha: novaSenha
        };

        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")) || [];

        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));

        alert("Usuário cadastrado com sucesso!");
    } else {
        alert("As senhas são diferentes!");
    }
}


function cadastraLivro() {
    let titulo = document.getElementById("tituloLivro").value;
    let autor = document.getElementById("autorLivro").value;
    let genero = document.getElementById("generoLivro").value;
    let isbn = document.getElementById("isbnLivro").value;

    let livro = {
        titulo: titulo,
        autor: autor,
        genero: genero,
        isbn: isbn
    };

    let livros = JSON.parse(localStorage.getItem("livros")) || [];

    livros.push(livro);
    localStorage.setItem("livros", JSON.stringify(livros));

    alert("Livro cadastrado com sucesso!");
}
