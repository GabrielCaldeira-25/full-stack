let canvas = document.getElementById('jogo');
    let ctx = canvas.getContext('2d');

    let teclasPressionadas = { w: false, s: false, arrowup: false, arrowdown: false, ' ': false };
    let tiros = [];
    let asteroides = [];
    let velocidadeAsteroide = 2;
    let jogoAtivo = false;
    let somTiro = new Audio('tiro.mp3');
    let asteroidesDestruidos = 0;
    let intervaloAsteroides;

    let tempoInicio = Date.now();
    let tempoDecorrido = 0;
    let intervaloTempo;

    let retangulo = {
      x: 35,
      y: 225,
      altura: 85,
      largura: 85,
      img: new Image(),
      desenha: function () {
        if (this.img.complete) ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura);
        else this.img.onload = () => ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura);
      },
      mover: function () {
        if (teclasPressionadas['w'] || teclasPressionadas['arrowup']) this.y -= 5;
        if (teclasPressionadas['s'] || teclasPressionadas['arrowdown']) this.y += 5;
        if (this.y > 450) this.y = 450;
        if (this.y < -10) this.y = -10;
      }
    };
    retangulo.img.src = 'foguete.png';

    function criarAsteroide() {
      let yAleatorio = Math.random() * (canvas.height - 50);
      let novo = {
        x: canvas.width + Math.random() * 200,
        y: yAleatorio,
        largura: 50,
        altura: 50,
        img: new Image(),
        destruido: false,
        mover() { if (!this.destruido) this.x -= velocidadeAsteroide; },
        desenha() { if (!this.destruido && this.img.complete) ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura); },
        explodir() { this.destruido = true; asteroidesDestruidos++; }
      };
      novo.img.src = 'asteroid.png';
      asteroides.push(novo);
    }

    function criarAsteroideGrande() {
      let novo = {
        x: canvas.width + Math.random() * 200,
        y: 150,
        largura: 200,
        altura: 200,
        vida: 25,
        img: new Image(),
        destruido: false,
        mover() { if (!this.destruido) this.x -= velocidadeAsteroide * 0.6; },
        desenha() {
          if (!this.destruido && this.img.complete) {
            ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura);
            ctx.fillStyle = "red";
            ctx.fillRect(this.x, this.y - 10, this.largura, 5);
            ctx.fillStyle = "green";
            ctx.fillRect(this.x, this.y - 10, (this.vida / 25) * this.largura, 5);
          }
        },
        tomarDano() {
          this.vida--;
          if (this.vida <= 0) this.explodir();
        },
        explodir() {
          this.destruido = true;
          asteroidesDestruidos++;
          setTimeout(() => {
            clearInterval(intervaloTempo);
            document.getElementById("modalWin").style.display = "flex";
          }, 1000);
        }
      };
      novo.img.src = 'asteroid.png';
      asteroides.push(novo);
    }

    function exibirFinalRound(callback) {
      const texto = "FINAL ROUND";
      const tempoExibicao = 3000;
      const inicio = Date.now();
      function mostrarTexto() {
        const agora = Date.now();
        const tempoDecorrido = agora - inicio;
        ctx.save();
        ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.font = "bold 60px Arial";
        ctx.textAlign = "center";
        ctx.fillText(texto, canvas.width / 2, canvas.height / 2);
        ctx.restore();
        if (tempoDecorrido < tempoExibicao) requestAnimationFrame(mostrarTexto);
        else callback();
      }
      mostrarTexto();
    }

    function criarTiro(x, y) {
      return {
        x: x + 45,
        y: y + 25,
        largura: 15,
        altura: 5,
        velocidade: 7,
        atualizar() { this.x += this.velocidade; },
        desenha() {
          ctx.fillStyle = "yellow";
          ctx.fillRect(this.x, this.y, this.largura, this.altura);
        }
      };
    }

    let ultimoTiro = 0;
    const intervaloTiro = 300;

    document.addEventListener('keydown', function (event) {
      let tecla = event.key.toLowerCase();
      teclasPressionadas[tecla] = true;
      if (tecla === ' ' && jogoAtivo) {
        let agora = Date.now();
        if (agora - ultimoTiro > intervaloTiro) {
          tiros.push(criarTiro(retangulo.x, retangulo.y));
          somTiro.currentTime = 0;
          somTiro.play();
          ultimoTiro = agora;
        }
      }
    });

    document.addEventListener('keyup', function (event) {
      let tecla = event.key.toLowerCase();
      teclasPressionadas[tecla] = false;
    });

    function colidiu(a, b) {
      return a.x < b.x + b.largura && a.x + a.largura > b.x &&
        a.y < b.y + b.altura && a.y + a.altura > b.y;
    }

    function reiniciarJogo() {
      location.reload();
    }

    function iniciarJogo() {
      document.getElementById('telaInicio').style.display = 'none';
      canvas.style.display = 'block';
      jogoAtivo = true;
      tempoInicio = Date.now();
      intervaloTempo = setInterval(() => {
        let agora = Date.now();
        tempoDecorrido = Math.floor((agora - tempoInicio) / 1000);
      }, 1000);
      for (let i = 0; i < 5; i++) criarAsteroide();
      intervaloAsteroides = setInterval(() => {
        if (jogoAtivo) criarAsteroide();
      }, 900);
      setTimeout(() => {
        clearInterval(intervaloAsteroides);
        if (jogoAtivo) {
          setTimeout(() => {
            exibirFinalRound(() => criarAsteroideGrande());
          }, 5000);
        }
      }, 30000);
      animacao();
    }

    function animacao() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      retangulo.mover();
      retangulo.desenha();

      for (let ast of asteroides) {
        ast.mover();
        ast.desenha();
        if (ast.x <= 0 && !ast.destruido) {
          jogoAtivo = false;
          clearInterval(intervaloTempo);
          document.getElementById("modalGameOver").style.display = "flex";
          return;
        }
      }

      for (let i = 0; i < tiros.length; i++) {
        tiros[i].atualizar();
        tiros[i].desenha();
        for (let j = 0; j < asteroides.length; j++) {
          if (!asteroides[j].destruido && colidiu(tiros[i], asteroides[j])) {
            if (asteroides[j].vida !== undefined) asteroides[j].tomarDano();
            else asteroides[j].explodir();
            tiros.splice(i, 1);
            i--;
            break;
          }
        }
      }

      tiros = tiros.filter(tiro => tiro.x < canvas.width);
      asteroides = asteroides.filter(a => !a.destruido);

      ctx.fillStyle = "white";
      ctx.font = "20px Arial";
      ctx.fillText("Destruidos: " + asteroidesDestruidos, 10, 30);
      ctx.fillText("Tempo: " + tempoDecorrido + "s", 10, 60);

      if (jogoAtivo) requestAnimationFrame(animacao);
    }