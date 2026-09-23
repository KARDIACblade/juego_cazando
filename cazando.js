let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");


let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;
let puntaje = 0;
let tiempo = 10;
let intervalo;
// variables consantes gato es rectangulo y comida es cuadrado
const ALTO_GATO = 50;
const ANCHO_GATO = 100;
const  ALTO_COMIDA = 50;
const ANCHO_COMIDA = 50;


 function graficarGato (){
 graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"green")
 }
 function graficarComida(){
graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"red")
 }
// iniciar grafica gato centrado  y comida a la derecha
 function iniciarJuego(){
   
 gatoX = canvas.width/2 - ANCHO_GATO/2;
 gatoY = canvas.height/2 - ALTO_GATO/2;
 comidaX=canvas.width-ANCHO_COMIDA;
 comidaY=canvas.height-ALTO_COMIDA;

 limpiarCanvas();

    graficarGato ();
    graficarComida();

   intervalo=setInterval(restarTiempo,1000);

 }
 
//1 crear funcion limpiar canvas
function limpiarCanvas (){
   ctx.clearRect(0,0,canvas.width,canvas.height);
}
//2 funcion mover izquierda gato 10px`
function moverIzquierda (){
   gatoX = gatoX -10;
   redibujarEscena();
}
//3.1 funcion mover derecha gato 10px
function moverDerecha (){
   gatoX = gatoX +10;
   redibujarEscena();
}
//3.2 funcion mover arriba gato 10 px
function moverArriba (){
   gatoY = gatoY -10;
   redibujarEscena();
}
//3.3 funcion mover abajo gato 10 px
function moverAbajo (){
   gatoY = gatoY +10;
   redibujarEscena();
}
//funcion redibujar escena
function redibujarEscena(){
   limpiarCanvas();
   graficarGato();
   graficarComida();
   detectarColision();

}
// parte 4.1 detectar colision
function detectarColision (){
   if (gatoX+ANCHO_GATO>comidaX && comidaX+ANCHO_COMIDA>gatoX 
      && gatoY+ALTO_GATO>comidaY && comidaY+ALTO_COMIDA>gatoY){
   //alert("gato toca la comida")
   // llamo a la funcion aparecer comida
   aparecerComida();
   puntaje = puntaje+1;
   mostrarEnSpan("puntos",puntaje);
      }
      if(puntaje==6){
         alert("GANADOR")
           clearInterval(intervalo);

      }
}
// usando funcion aleatorio, nueva funcion aparecerComida cambia de ubicacion
function aparecerComida (){
    comidaX=generarAleatorio(0,canvas.width-ANCHO_COMIDA);
    comidaY=generarAleatorio(0,canvas.height-ALTO_COMIDA);
    //necesito que grafique de nuevo
    limpiarCanvas();
    graficarGato();
    graficarComida();
}
//cuenta regresiva
function restarTiempo(){
   tiempo = tiempo-1;
   mostrarEnSpan("tiempo",tiempo);
   if(tiempo == 0){
      alert("GAME OVER")
      clearInterval(intervalo);
   }
   
}
function reiniciar(){
   puntaje=0;
   tiempo=10;
   mostrarEnSpan("puntos",puntaje);
   mostrarEnSpan("tiempo",tiempo);
   clearInterval(intervalo);
   iniciarJuego();
}