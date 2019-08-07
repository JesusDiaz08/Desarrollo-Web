'use strict'

/*
* Todos los numeros divisores de un número introducidos en prompt
* */

let A = parseInt(prompt("Dame un numero: ", 1));

for (var i = 1; i <= A; i++){
    if (A % i == 0)
        document.write(i + " es divisor de " + A + "</br>");
}