'use strict'

/*
* Hacer un programa que muestre todos los numeros entre 2 numeros
* introducidos por el usuario
* */
let A = parseInt(prompt("Numero A = ", 0));
let B = parseInt(prompt("Numero B = ", 0));

document.write("<h2> De " + A + "a " + B + " están estos números.</h2>");
for (let i = A; i <= B; i++){
    if(i != B)
        document.write(i + ",");
    else
        document.write(i);
}
