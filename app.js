const leer = require("prompt-sync")();
let cantidadIntentos =0
let numIngresado=0
console.log("Bienvenido al juego, intenta adivinar el NUMERO que ha generado el programa, pero antes escribe cuantos intentos quieres tener, tiene que ser mas de 3 intentos");
cantidadIntentos = Number(leer());

let numeroSecreto= Math.floor(Math.random() * (cantidadIntentos*2 - 0 + 1) + 0);
for (let i = 0; i < cantidadIntentos; i++) {
    console.log("Adivina el nro secreto");
    numIngresado = Number(leer());
    if (numIngresado == numeroSecreto) {
        console.log("Ganaste!");
        i = cantidadIntentos + 1
    } else {
        console.log("Sigue intentando, te queda", cantidadIntentos - 1 - i, "intentos");
    }
}
if (numIngresado != numeroSecreto) {
    console.log("Game over :c El numero secreto era:", numeroSecreto);
} 