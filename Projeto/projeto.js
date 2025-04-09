let canvas = document.getElementById('jogo');
let ctx = canvas.getContext('2d');

let teclasPressionadas = {
    w: false,
    s: false,
    arrowup: false,
    arrowdown: false,
    ' ': false
};

let tiros = [];
let asteroides = [];
let velocidadeAsteroide = 2;
let jogoAtivo = true; 
let somTiro = new Audio('tiro.mp3');
// Jogador
let retangulo = {
    x: 35,
    y: 225,
    altura: 85,
    largura: 85,
    img: new Image(),
    desenha: function(){
        if (this.img.complete) {
            ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura);
        } else {
            this.img.onload = () => {
                ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura);
            };
        }
    },
    mover: function(){
        if(teclasPressionadas['w'] || teclasPressionadas['arrowup']) this.y -= 5;
        if(teclasPressionadas['s'] || teclasPressionadas['arrowdown']) this.y += 5;

        
        if(this.y > 450) this.y = 450;
        if(this.y < -10) this.y = -10;
    }
};
retangulo.img.src = 'foguete.png';

// Asteroides
function criarAsteroide() {
    let yAleatorio = Math.random() * (canvas.height - 50);
    let novo = {
        x: canvas.width + Math.random() * 200,
        y: yAleatorio,
        largura: 50,
        altura: 50,
        img: new Image(),
        destruido: false,
        explosaoImg: new Image(),
        frameExplosao: 0,
        totalFrames: 6,
        frameLargura: 64,
        tempoEntreFrames: 5,
        contadorTempo: 0,

        mover: function () {
            if (!this.destruido) {
                this.x -= velocidadeAsteroide;
            }
        },

        desenha: function () {
            if (this.destruido) {
                if (this.frameExplosao < this.totalFrames) {
                    let sx = this.frameExplosao * this.frameLargura;
                    ctx.drawImage(
                        this.explosaoImg,
                        sx, 0,
                        this.frameLargura, this.frameLargura,
                        this.x, this.y,
                        this.largura, this.altura
                    );
                    this.contadorTempo++;
                    if (this.contadorTempo >= this.tempoEntreFrames) {
                        this.frameExplosao++;
                        this.contadorTempo = 0;
                    }
                }
            } else {
                if (this.img.complete) {
                    ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura);
                }
            }
        },

        explodir: function () {
            this.destruido = true;
            this.frameExplosao = 0;
        }
    };

    novo.img.src = 'asteroid.png';
    novo.explosaoImg.src = 'explosao.png';

    asteroides.push(novo);
}

// Criar asteroides
for (let i = 0; i < 5; i++) criarAsteroide(); 
setInterval(() => {
    if (jogoAtivo) criarAsteroide();
}, 900);

// Tiros
function criarTiro(x, y) {
    return {
        x: x + 45,
        y: y + 25,
        largura: 15,
        altura: 5,
        velocidade: 7,
        atualizar: function() {
            this.x += this.velocidade;
        },
        desenha: function() {
            ctx.fillStyle = "yellow";
            ctx.fillRect(this.x, this.y, this.largura, this.altura);
        }
    };
}

let ultimoTiro = 0;
const intervaloTiro = 300;

document.addEventListener('keydown', function(event){
    let tecla = event.key.toLowerCase();
    teclasPressionadas[tecla] = true;

    if (tecla === ' ') {
        let agora = Date.now();
        if (agora - ultimoTiro > intervaloTiro && jogoAtivo) {
            tiros.push(criarTiro(retangulo.x, retangulo.y));
            somTiro.currentTime = 0;  
            somTiro.play();          
            ultimoTiro = agora;
        }
    }
});

document.addEventListener('keyup', function(event){
    let tecla = event.key.toLowerCase();
    teclasPressionadas[tecla] = false;
});

// Colisão
function colidiu(a, b) {
    return a.x < b.x + b.largura &&
           a.x + a.largura > b.x &&
           a.y < b.y + b.altura &&
           a.y + a.altura > b.y;
}

// Animação principal
function animacao() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    retangulo.mover();
    retangulo.desenha();

    for (let i = 0; i < asteroides.length; i++) {
        asteroides[i].mover();
        asteroides[i].desenha();

        
        if (asteroides[i].x <= 0 && !asteroides[i].destruido) {
            jogoAtivo = false;
            alert("💥 Game Over!");
            return;
        }
    }

    for (let i = 0; i < tiros.length; i++) {
        tiros[i].atualizar();
        tiros[i].desenha();
    }

    // Verifica colisões
    for (let i = 0; i < tiros.length; i++) {
        for (let j = 0; j < asteroides.length; j++) {
            if (!asteroides[j].destruido && colidiu(tiros[i], asteroides[j])) {
                asteroides[j].explodir();
                tiros.splice(i, 1);
                i--;
                break;
            }
        }
    }

    tiros = tiros.filter(tiro => tiro.x < canvas.width);
    asteroides = asteroides.filter(a => !(a.destruido && a.frameExplosao >= a.totalFrames));

    if (jogoAtivo) {
        requestAnimationFrame(animacao);
    }
}
animacao();