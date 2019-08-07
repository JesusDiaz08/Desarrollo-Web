'use strict'

/*
* Que nos diga si un numero es par o impar
* 1. Ventana prompt.
* 2. Si no es valido, que nos pida nuevamente el numero.
* */

let number = parseInt(prompt("Numero: ", 0));

while (isNaN(number))
    number = parseInt(prompt("Numero: ", 0));

if (number % 2)
    alert("Numero Impar");
else
    alert("Numero Par");