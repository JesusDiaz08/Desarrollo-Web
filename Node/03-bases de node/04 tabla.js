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
    .help()
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

let argv2 = process.argv;

console.log("Mio:\n", argv2); // El de los procesos.
console.log("\nYARGS:\n", argv); // El de YARGS
console.log("\nYARGS-base:\n", argv.base); // El de YARGS
console.log("\nYARGS-limite:\n", argv.limite); // El de YARGS

/*let parametro = argv[2];
let base = parametro.split('=')[1];

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err));*/