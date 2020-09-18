const argv = require('./config/yargs.js').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar3');

let comando = argv._[0]; // Nos da la lista de comandos

switch (comando) {
    case "listar":
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case "crear":
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ', colors.red(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}