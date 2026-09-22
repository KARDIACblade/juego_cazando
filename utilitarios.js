// crear funcion graficar rectangulo que recibe 5 parametros
  function graficarRectangulo(x,y,ancho,alto,color){
   ctx.fillStyle = color;
   ctx.fillRect (x,y,ancho, alto);
}

//generar un numero aleatorio
function  generarAleatorio (min,max){
    let random = Math.random();
    let numero = random*(max-min);
    let numeroEntero = Math.ceil(numero);
    numeroEntero = numeroEntero + min;
    return (numeroEntero)
}

function mostrarEnSpan (idSpan,valor){
    let componente = document.getElementById(idSpan);
    componente.textContent = valor;
}