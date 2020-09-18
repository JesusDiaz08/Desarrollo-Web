// Se ejecuta despues de que algo sucede

// Esta es una callback, que se ejecutara 
// la funcion despues de que pasen 3 segundos
/*setTimeout(function() {
    console.log("Hola mundo");
}, 3000);*/

// Usando funciones de flecha
// setTimeout(() => {
//     console.log("Hola mundo");
// }, 3000);

let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Jesus',
        id: id
    }
    if (id === 20) {
        callback(`El usuario con ID ${id}, no existe en la BD.`);
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
});