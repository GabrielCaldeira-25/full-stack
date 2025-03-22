function classification() {
    let num = parseInt(document.getElementById('num').value)

    let resultado = 'Coloque um numero'
    if (num >= 0 && num <= 10 ) {
        resultado = " Insuficiente";
    } else if (num >= 11 && num <= 15) {
        resultado = "Bom";
    } else if (num > 15){
        resultado = "Muito bom";
    }
document.getElementById('resultado').innerHTML = resultado

}