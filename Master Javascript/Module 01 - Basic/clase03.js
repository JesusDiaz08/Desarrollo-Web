'use strict'

/* 1. Ventana de alerta de datos */
alert("Esta es una alerta A");
alert("Esta es una alerta B");

/* 2. Ventana de ingreso de datos */
var datosA = prompt("Mete datos: ", 9); // Si no mete ningun valor, se asigna el 9
var datosB = prompt("Otra vez we: ");

console.log("Prompt A = " + datosA);
console.log("Prompt B = " + datosB);

/* 3. Ventana de confirmación */
confirm("Confirmación");
var confirmA = confirm("Confirmación A");
var confirmB = confirm("Confirmación B");

console.log("Confirmación A: " + confirmA);
console.log("Confirmación B: " + confirmB);