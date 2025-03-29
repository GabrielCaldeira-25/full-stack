
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
ctx.arc(150,150,50,1*Math.PI,0*Math.PI);

ctx.stroke();
ctx.closePath();