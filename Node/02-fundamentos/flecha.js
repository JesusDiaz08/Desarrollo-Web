// Funciones flecha
function sumar(a, b) {
    return a + b;
}

console.log(sumar(10, 20));

// Usando funciones de flecha
let sumarf = (a, b) => {
    return a + b;
};
console.log(sumarf(30, 40));

// Si se puede escribir en una sola linea
let sumarf2 = (a, b) => a + b;

console.log(sumarf2(50, 60));


/* Traducir la siguiente funcion
	function saludar() {
	    return 'Hola Mundo';
	}
a funcion de fleca*/
let saludar = () => 'Hola Mundo';
console.log(saludar())

// Que pasa cuando usamos templates literales
function saluda(nombre) {
    return `Hola ${nombre}`;
}

console.log(saluda("Jesus"));

// Usando funciones de flecha
let saluda_f1 = (nombre) => `Hola ${nombre}`;

console.log(saluda_f1("Mar"));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winstone',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} tiene el poder ${this.poder}`;
    }
}

console.log(deadpool.getNombre());

// Vamos a transformar a una funcion de flecha
let deadpoolf1 = {
    nombre: 'Wade',
    apellido: 'Winstone',
    poder: 'Regeneración',
    /*getNombre: () => {
        return `${this.nombre} ${this.apellido} tiene el poder ${this.poder}`;
    } Marca error por this*/
    getNombre() {
        return `${this.nombre} ${this.apellido} tiene el poder ${this.poder}`;
    }
}
console.log(deadpoolf1.getNombre())