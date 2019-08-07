'use strict'

/*
* Mostrar todos los números enteros impares, que hay
* entre dos numeros introducidos por el usuario.
* */

let A = parseInt(prompt("Valor de A.", 0));
let B = parseInt(prompt("Valor de B.", 0));

while(A <= B){
    if (A % 2 != 0)
        document.write(A + "</br>");
    A++;
}