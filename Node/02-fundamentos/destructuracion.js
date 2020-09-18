let deadpool = {
    nombre: 'Wade',
    apellido: 'Winstone',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} tiene el poder ${this.poder}`;
    }
}

console.log(deadpool.getNombre());

// Si yo quiero obtener la variable
//let nombre = deadpool.nombre;
//let apellido = deadpool.apellido;
//let poder = deadpool.poder;
let { nombre: primerNombre, apellido, poder } = deadpool;
console.log(primerNombre, apellido, poder);