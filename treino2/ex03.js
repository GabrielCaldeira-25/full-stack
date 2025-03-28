function cadastrar(){
    let nome = document.getElementById('nome').value;
    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;
    if (localStorage.getItem("cadastro")){
        alert('Já existe um cadastro! Por favor, limpe os dados antes');
        return;
    }
    if (nome==="" || login === "" || senha === ""){
        alert('Preencha todas as informações antes!');
        return;
    }
    let usuario = {nome , login , senha};
    localStorage.setItem = ("cadastro" , JSON.stringify(usuario));
    alert('Dados cadastrados com sucesso!');
}

