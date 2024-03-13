 let numerosecreto=0;
console. log (numerosecreto);
let intentos=0; 
let listaNumerosSorteados = [];
let numMax = 10 ;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento() {
   numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   if (numeroDeUsuario===numerosecreto) {
      asignarTextoElemento('p',`Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'vez':'veces'}`);
     document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
            // el usuario no acierta
            if (numeroDeUsuario > numerosecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        } else { 
            asignarTextoElemento('p','El numero secreto es mayor');
    }
    intentos++;
    limpiarcaja();
    }
   return;
}
function limpiarcaja(){
    document.querySelector('#valorUsuario').value ='';
}
function generarNumeroSecreto() {
    let numerogenerado =  Math.floor(Math.random()*numMax)+1;
    console.log (numerogenerado);
    console.log (listaNumerosSorteados);
  
    if (listaNumerosSorteados.length == numMax) {
        asignarTextoElemento ('p', 'ya se sortearon todos los números posibles');
    } else {
            if (listaNumerosSorteados.includes(numerogenerado)) {
                return generarNumeroSecreto();
             } else {
                 listaNumerosSorteados.push(numerogenerado);
                 return numerogenerado;
                }
        }
   
}
function condicionesIniciales() {
    asignarTextoElemento('h1','juego del número secreto'); 
    asignarTextoElemento('p',`Indica un número del 1 al ${numMax}`);
    numerosecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numerosecreto);

}
function reiniciarJuego() {
    //limpiar caja
    limpiarcaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}   

condicionesIniciales();  































/* 
function mundo(){
    console.log("¡HOLA MUNDO!");
}
mundo();

function holanombre(nombre){
    console.log("¡HOLA " + nombre + "!");
}
holanombre('wilder');

function calculardoble(numero) {
 return numero*2;
}
let resultadoble = calculardoble(5);
console.log(resultadoble);

function calcularpromedio(a,b,c) {
    return (a + b + c)/3;
}
let promedio = calcularpromedio(4,7,10);
console.log(promedio);

function mayorque (a,b) {
    return  a > b ? a : b ;
}
let numayor = mayorque(15,9);
console.log(numayor);

function cuadrado(numero){
    return numero * numero ;
}
let  resultado = cuadrado(2);
console.log(resultado);
*/