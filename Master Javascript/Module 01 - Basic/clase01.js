'use strict'


/*===== UTILIZANDO VAR =====*/
var numero = 30;
console.log(numero);

if (1) {
    numero = 40
    console.log(numero);
}

console.log(numero);

/*===== UTILIZANDO LET =====*/
let texto = "Master JS";
console.log(texto);

if (1){
    let texto = "Variable let";     //Actua solamente en el bloque
    console.log(texto);             // despues de aqui, el valor regresa
}

console.log(texto);