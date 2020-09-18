/** Requires */
//const fs = require('express');  // Externa de node
//const fs = require('./');	// Propias de nosotros
const fs = require('fs'); // Propio de node

let base = 4;
let data = "";

for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
}

/**Grabar en un archivo de texto la tabla de multiplicar**/
fs.writeFile(`./Tablas/Tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El arhcivo tabla-${base}.txt ha sido creado`);
});