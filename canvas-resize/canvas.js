console.log("hello");


document.querySelector(".refresh-button").addEventListener("click", function() {
    location.reload();
});


var canvas = document.querySelector('canvas');
// console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);


var c = canvas.getContext('2d');
// c (short for "context") is the object that provides methods to draw shapes, text, images, and other graphics.

// ctx (short for "context") is the object that provides methods to draw shapes, text, images, and other graphics.


c.fillStyle = 'rgba(0, 0, 255, 4.6)';
c.fillRect(0, 0, 100, 100);
c.fillRect(0, 200, 100, 100);
c.fillRect(100, 100, 100, 100);
c.fillRect(200, 0, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, 0.3)';
c.fillRect(200, 200, 100, 100);
c.fillRect(300, 100, 100, 100);
c.fillRect(400, 0, 100, 100);
c.fillRect(400, 200, 100, 100);



// line 
c.beginPath();
c.moveTo(100, 400);
c.lineTo(400, 200);
c.lineTo(400, 500);
c.lineTo(100, 450)
c.lineTo(100, 400)
c.strokeStyle = "rgba(255,0,0, 6.9)";
c.stroke();

// arc  -> circle
// c.arc(x, y, radius, startAngle: float, endAngle:floot, counterclockwise? : boolean)
// c.beginPath();
// c.arc(300,380, 30, 0, Math.PI*2, false);
// c.strokeStyle = 'blue';
// c.stroke();


// task is to generate to create a random differnt color arc
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}


for(var i = 0; i<50; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 50, 0, Math.PI*2, false);
    c.strokeStyle = getRandomColor();
    c.lineWidth = 3
    c.stroke();
}