/** Requires */
//const fs = require('express');  // Externa de node
//const fs = require('./');	// Propias de nosotros
const fs = require('fs'); // Propio de node

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido no '${base}' debe de ser un numero`);
            return;
        }
        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        /**Grabar en un archivo de texto la tabla de multiplicar**/
        fs.writeFile(`./Tablas/Tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Tabla-${base}-al-${limite}.txt`);
        });
    });
};

module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
};