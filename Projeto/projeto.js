let canvas = document.getElementById('jogo');
let ctx = canvas.getContext('2d');

let teclasPressionadas = {
    w: false,
    s: false,
    arrowup: false,
    arrowdown: false,
    ' ': false // espaço
};

let tiros = [];

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
        if(teclasPressionadas['w'] || teclasPressionadas['arrowup'])    {this.y -= 5;}
        if(teclasPressionadas['s'] || teclasPressionadas['arrowdown'])  {this.y += 5;} 

        if(this.x > 400){this.x = 400}
        if(this.x < 0){this.x = 0}
        if(this.y > 450){this.y = 450}
        if(this.y < 0){this.y = 0}
    }
};

retangulo.img.src = 'foguete.png';

function criarTiro(x, y) {
    return {
        x: x +45,
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
        if (agora - ultimoTiro > intervaloTiro) {
            tiros.push(criarTiro(retangulo.x, retangulo.y));
            ultimoTiro = agora;
        }
    }
});

document.addEventListener('keyup', function(event){
    let tecla = event.key.toLowerCase();
    teclasPressionadas[tecla] = false;
});

function animacao(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    retangulo.mover();
    retangulo.desenha();

    // Atualizar e desenhar tiros
    for (let i = 0; i < tiros.length; i++) {
        tiros[i].atualizar();
        tiros[i].desenha();
    }

    // Remove os tiros que saíram da tela
    tiros = tiros.filter(tiro => tiro.y + tiro.altura > 0);

    requestAnimationFrame(animacao);
}
animacao();





