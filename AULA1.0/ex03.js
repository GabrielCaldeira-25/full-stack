function cadastrar() {
    let nome = document.getElementById("nome").value;
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;

    if (localStorage.getItem("cadastro")) {
        alert("Já existe um cadastro! Limpe antes de cadastrar um novo.");
        return;
    }

    if (nome === "" || login === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    let usuario = { nome, login, senha };
    localStorage.setItem("cadastro", JSON.stringify(usuario));
    alert("Cadastro realizado com sucesso!");
}
