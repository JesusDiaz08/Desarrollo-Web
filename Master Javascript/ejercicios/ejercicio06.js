'use strict'
/*
* Realizar una calculadora que pida dos numeros por pantalla
* Si se mete mal un numero, que se vuelva a pedir.
* En el cuerpo de la pagina, en alerta y por la consola, el resultado de
*   - Sumar, restar, multiplicar, dividir esas dos cifras.
* */

let A = parseInt(prompt("Numero A: ", 1));
let B = parseInt(prompt("Numero B: ", 1));

while (A < 0 || B < 0 || isNaN(A) || isNaN(B)){
    A = parseInt(prompt("Numero A: ", 1));
    B = parseInt(prompt("Numero B: ", 1));
}

let inDocument = "|=============== OPERACIONES ==============|</br>" +
                "| SUMA: " + A + " + " +B+ "= " + (A + B) + " |</br>" +
                "| RESTA: " + A + " - " + B + " = " + (A - B) + " |</br>" +
                "| MULTIPLICACION: " + A + " x " + B+ " = " + (A * B) + " |</br>" +
                "| DIVISION: " + A + " / " + B +" = " + (A / B) + " |</br>" +
                "|==========================================|</br>";

let inCMD = "|=============== OPERACIONES ==============|\n" +
                "| SUMA: " + A + " + " +B+ "= " + (A + B) + " |\n" +
                "| RESTA: " + A + " - " + B + " = " + (A - B) + " |\n" +
                "| MULTIPLICACION: " + A + " x " + B+ " = " + (A * B) + " |\n" +
                "| DIVISION: " + A + " / " + B +" = " + (A / B) + " |\n" +
                "|==========================================|\n";

document.write(inDocument);
console.log(inCMD);
alert(inCMD);