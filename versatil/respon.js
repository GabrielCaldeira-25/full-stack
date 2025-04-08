let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let inimigo = {
    x: 500,
    y: 200,
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
    mover: function() {
        this.x -= 2; // Exemplo: inimigo vindo da direita pra esquerda
        
    }
};
inimigo.img.src = 'asteroid.png';