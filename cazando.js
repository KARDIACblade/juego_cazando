let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

let alturaRect = 50;
let largoRect = 100;

let x = canvas.width/2 - largoRect/2;
let y = canvas.height/2 - alturaRect/2


 function graficarGato (){
    ctx.fillStyle = "green";
    ctx.fillRect(x,y, largoRect,alturaRect);
 }