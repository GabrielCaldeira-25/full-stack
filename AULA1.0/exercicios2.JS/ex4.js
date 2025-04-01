function media(){
let lab = parseInt(document.getElementById('lab').value)
let avaliacao = parseInt(document.getElementById('Avaliação').value)
let exame = parseInt(document.getElementById('Exame').value)


let resultado = ((lab + avaliacao + exame)/3)
 document.getElementById('calc').innerHTML = resultado
}