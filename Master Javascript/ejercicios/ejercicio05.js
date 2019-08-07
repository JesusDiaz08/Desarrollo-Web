'use strict'

/*
* Tabla de multiplicar de un numero introducido por pantalla
* */
let numero = parseInt(prompt("¿De qué número quieres la tabla?", 1));


document.write("<h1>Tabla de multiplicar del número " + numero + "</h1>");
for (let i = 1; i <= 10; i++)
    document.write( numero + "x" + i + " = " + (numero * i) + "</br>" );

/*========= TODAS LAS TABLAS DE MULTIPLICAR ========*/
for (let i = 1; i <= 10; i++){
    document.write("<h1>Tabla de multiplicar del número " + i + "</h1>");
    for (let j = 1; j <= 10; j++)
        document.write( i + "x" + j + " = " + (i * j) + "</br>" );
}