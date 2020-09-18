let nombre = "Deadpool";
let real = "Roberto Mtz";

console.log("Template Literales");
console.log('Sin template-string: ' + nombre + ' ' + real);
console.log(`Con template-string: ${nombre} ${real}`);

// Comparando si son iguales
let nombreCompleto = nombre + " " + real;
let nombreTemplate = `${nombre} ${real}`;

console.log(nombreCompleto === nombreTemplate);

// Resultados de funciones
function getNombre() {
    return `${nombre} ${real}`;
}

console.log(`El nombre de ${getNombre()}`);