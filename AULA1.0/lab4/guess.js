const numeroAleatorio = Math.floor(Math.random() * 100);

function verificarPalpite() {
  const palpite = parseInt(document.getElementById("palpite").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(palpite) || palpite < 0 || palpite > 99) {
    resultado.innerText = "Por favor, digite um número entre 0 e 99.";
    return;
  }

  if (palpite === numeroAleatorio) {
    resultado.innerText = "Parabéns! Você acertou!";
    resultado.style.backgroundColor = "lightgreen";
  } else {
    resultado.innerText = "Errado! Tente novamente.";
    resultado.style.setProperty("background-color", "red");
  }
}s