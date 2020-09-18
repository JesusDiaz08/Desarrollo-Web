var name = "C"; // Si se puede inicialiar en otro lugar
let nombre = "Wolverine"; // No se puede volver a inicializar

if (true) {
    let nombre = "Magneto";
}

console.log(nombre);

//Ciclos
/* Usando var, aun vive fuera del for
for (var i = 0; i <= 5; i++) {
    console.log(`i: ${i}`)
}
console.log(i)
*/

// Solo vivirá en el for
let i;
for (let i = 0; i <= 5; i++) {
    console.log(`i: ${i}`)
}
console.log(i);