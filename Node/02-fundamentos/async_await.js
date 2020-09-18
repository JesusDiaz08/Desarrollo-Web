/**
 * Async Await
 */
// =====================================
/**
 * Al poner la palabra reservada Async
 * esto nos va a devolver una promesa
 */
/*let getNombre = async() => {

    //Para error personalizado
    //throw new Error('No existe un nombre para ese usuario');
    return 'Jesus';
};*/

/* Lo de arriba es lo mismo que si hicieramos*/
let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Jesus');
        }, 3000);
    });
};

// Simulando el Await
let saludo = async() => {

    /* El await simula un comportamiento sincrono y se va a 
    quedar esperando hast a que la promesa se satisfaga */
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo().then(mensaje => {
    console.log(mensaje);
}).catch(err => {
    console.log('Error de Async', err);
});