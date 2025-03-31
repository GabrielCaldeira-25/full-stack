function cadastrar(){
     let nome = document.getElementById('nome').value
     let login = document.getElementById('login').value
     let senha = document.getElementById('senha').value

     if (localStorage.getItem("cadastro")){
        alert('Já existe um cadastro, apague antes')
        return;
     }

    let dados ={nome,login,senha}
    localStorage.setItem("cadastro" , dados)
    alert('Cadastro realizado com sucesso')
}

function limpar(){
    localStorage.removeItem("cadastro")
    alert('Dados apagados')

}
function mostrarDados() {
    let dadosSalvos = localStorage.getItem("cadastro");

    if (!dadosSalvos) {
        alert("Nenhum cadastro encontrado!");
        return;
    }

    let usuario = JSON.parse(dadosSalvos);
    document.getElementById("dados").textContent = `Nome: ${usuario.nome}, Login: ${usuario.login}, Senha: ${usuario.senha}`;
}


