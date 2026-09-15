let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

//variables gato rectangulo
//let alturaRect = 50;
//let largoRect = 100;

//let x = canvas.width/2 - largoRect/2;
//let y = canvas.height/2 - alturaRect/2

//variables comida cuadrado
//let a = 50

// iniciar variables en cero gato y comida
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;
// variables consantes gato es rectangulo y comida es cuadrado
const ALTO_GATO = 50;
const ANCHO_GATO = 100;
const  ALTO_COMIDA = 50;
const ANCHO_COMIDA = 50;
// iniciar grafica con variables iniciales

 function graficarGato (){
    //ctx.fillStyle = "green";
    //ctx.fillRect(gatoX,gatoY, ANCHO_GATO,ALTO_GATO);
   graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"green")
 }
 function graficarComida(){
    //ctx.fillStyle = "red";
    //ctx.fillRect(comidaX,comidaY, ANCHO_COMIDA,ALTO_COMIDA);
    // ctx.fillRect(canvas.width-ANCHO_COMIDA,0, ANCHO_COMIDA,ALTO_COMIDA);
   graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"red")
 }
// iniciar grafica gato centrado  y comida a la derecha
 function iniciarJuego(){
   
 gatoX = canvas.width/2 - ANCHO_GATO/2;
 gatoY = canvas.height/2 - ALTO_GATO/2;
 comidaX=canvas.width-ANCHO_COMIDA;
 comidaY=canvas.height-ALTO_COMIDA;

    graficarGato ();
    graficarComida();
 }
 
//1 crear funcion limpiar canvas
function limpiarCanvas (){
   ctx.clearRect(0,0,canvas.width,canvas.height);
}
//2 funcion mover izquierda gato 10px`
function moverIzquierda (){
   gatoX = gatoX -10;
   limpiarCanvas();
   graficarGato();
   graficarComida();
}
