// Creando comandos para que la linea de comandos lo reconozca

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplciar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Crear el archivo de la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar2');

let comando = argv._[0]; // Nos da la lista de comandos

switch (comando) {
    case "listar":
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case "crear":
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}