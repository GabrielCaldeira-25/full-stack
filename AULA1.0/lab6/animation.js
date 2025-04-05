let canvas = document.getElementById('bolinha')
let ctx = canvas.getContext('2d')

let bola = {
    x:0,
    y: 0,
    raio:10,
    img: new Image(),
    desenhar: function(){
        this.img.src = 'bolinha.jpg'
        ctx.beginPath()
        ctx.drawImage(this.img, this.x - this.raio, this.y - this.raio, 2*this.raio, 2*this.raio)
        ctx.closePath()
        
}

}
function animation(){
    ctx.clearRect(0,0,300,300)
    bola.desenhar()
    requestAnimationFrame(animation)
    }
    
animation()

document.addEventListener ('mousemove', function(evento){
    let rect = canvas.getBoundingClientRect()
    let x_mouse = evento.clientX - rect.left
    let y_mouse = evento.clientY - rect.top
    console.log(x_mouse,y_mouse)
    bola.x = x_mouse
    bola.y = y_mouse
    if (bola.x > 300 - 2*bola.raio ){
        bola.x = 290
    }
    if (bola.y > 300 - 2*bola.raio){
        bola.y = 290
    }
    if (bola.x < 0 + 2*bola.raio){
        bola.x = 10
    }
    if (bola.y < 0 + 2*bola.raio){
        bola.y = 10
    }
})