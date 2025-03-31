
let canvas= document.getElementById('canvas')
let ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.lineWidth = 2
ctx.strokeStyle = 'grey'
ctx.fillStyle = 'white'
ctx.fillRect(10,10,40,40)
ctx.strokeRect(0,0,300,300)
// ctx.closePath()

// ctx.beginPath()
ctx.lineWidth = 2
ctx.fillStyle = 'blue'
ctx.fillRect(1,1,55,55)
// ctx.closePath()

ctx.lineWidth = 2
ctx.fillStyle = 'yellow'
ctx.fillRect(1,220,40,299)

ctx.lineWidth = 2
ctx.fillStyle = 'yellow'
ctx.fillRect(40,260,40,299)
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 2
ctx.fillStyle = 'black'
ctx.fillRect(260,220,299,299)
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 2
ctx.fillStyle = 'black'
ctx.fillRect(220,260,260,299)
ctx.closePath()
// ctx.beginPath()
ctx.lineWidth = 2
ctx.fillStyle = 'red'
ctx.fillRect(245,1,299,55)
// ctx.closePath()


// ctx.beginPath()
ctx.lineWidth = 2
ctx.strokeStyle = 'blue'
ctx.moveTo(10,10)
ctx.lineTo(150,150)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 2
ctx.strokeStyle = 'red'
ctx.moveTo(290,10)
ctx.lineTo(150,150)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 2
ctx.fillStyle = 'aqua'
ctx.fillRect(1,110,40,80)
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 2
ctx.fillStyle = 'aqua'
ctx.fillRect(1,110,40,80)
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 2
ctx.fillStyle = 'aqua'
ctx.fillRect(260,130,250,40)
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 2
ctx.strokeStyle = 'green'
ctx.moveTo(1,150)
ctx.lineTo(299,150)
ctx.stroke()
ctx.closePath()


ctx.beginPath()
ctx.lineWidth = 2
ctx.strokeStyle = 'blue'
ctx.moveTo(150,150)
ctx.lineTo(150,299)
ctx.stroke()
ctx.closePath()

ctx.lineWidth = 2
ctx.fillStyle = 'red'
ctx.fillRect(100,150,50,50)

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(150,299,55,1.5*Math.PI,2.5*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(150,299,65,1*Math.PI,1.5*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'green';
ctx.arc(150,299,40,1*Math.PI,0*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(150,150,60,1*Math.PI,0*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(150,150,80,1*Math.PI,1.25*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(150,150,80,1.75*Math.PI,0*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.fillStyle = 'aqua'
ctx.arc(150,115,15,0*Math.PI,2*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.fillStyle = 'yellow'
ctx.arc(80,220,15,0*Math.PI,2*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.fillStyle = 'yellow'
ctx.arc(220,220,15,0*Math.PI,2*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.textAlign = 'center'
ctx.font= '20px Arial'
ctx.fillText('Canvas', 150,60)
ctx.closePath();


let canvas2= document.getElementById('canvas2')
let ctx2 = canvas2.getContext('2d')
 

ctx2.beginPath()
ctx2.lineWidth = 2
ctx2.fillStyle = 'grey'
ctx2.fillRect(0,300,400,400)
ctx2.closePath()

ctx2.beginPath()
ctx2.lineWidth = 2
ctx2.fillStyle = 'rgb(102, 65, 32)'
ctx2.fillRect(150,200,100,100)
ctx2.closePath()

ctx2.beginPath()
ctx2.lineWidth = 2
ctx2.fillStyle = 'rgb(112, 174, 224)'
ctx2.fillRect(160,220,30,30)
ctx2.closePath()

ctx2.beginPath()
ctx2.lineWidth = 2
ctx2.fillStyle = 'rgb(112, 174, 224)'
ctx2.fillRect(210,220,30,30)
ctx2.closePath()

ctx2.beginPath()
ctx2.lineWidth = 2
ctx2.fillStyle = 'rgb(73, 50, 45)'
ctx2.fillRect(190,250,20,50)
ctx2.closePath()


ctx2.beginPath()
ctx2.lineWidth = 2
ctx2.fillStyle = 'rgb(102, 65, 32)'
ctx2.fillRect(353,300,15,40)
ctx2.closePath()

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'green'
ctx2.arc(360,285,25,0*Math.PI,2*Math.PI);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath()
ctx2.lineWidth = 2
ctx2.fillStyle = 'rgb(204, 100, 77)'
ctx2.moveTo(150,200)
ctx2.lineTo(200,150)
ctx2.lineTo(250,200)
ctx2.fill()
ctx2.closePath()

ctx2.beginPath()
ctx2.lineWidth = 2
ctx2.fillStyle = 'rgb(102, 65, 32)'
ctx2.fillRect(45,260,15,40)
ctx2.closePath()

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'green'
ctx2.arc(52,245,25,0*Math.PI,2*Math.PI);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath()
ctx2.lineWidth = 2
ctx2.fillStyle = 'rgb(65, 135, 201)'
ctx2.fillRect(0,300,40,100)
ctx2.closePath()


ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'rgb(65, 135, 201)'
ctx2.arc(0,300,45,1*Math.PI,0*Math.PI);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath()
ctx2.lineWidth = 2
ctx2.fillStyle = 'rgb(65, 135, 201)'
ctx2.fillRect(0,300,45,100)
ctx2.closePath()

ctx2.beginPath()
ctx2.lineWidth = 2
ctx2.fillStyle = 'rgb(65, 135, 201)'
ctx2.fillRect(0,360,150,40)
ctx2.closePath()

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'rgb(65, 135, 201)'
ctx2.arc(150,400,40,1,5*Math.PI,0.5*Math.PI);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'yellow'
ctx2.arc(300,100,45,0*Math.PI,2*Math.PI);
ctx2.fill();
ctx2.closePath();


