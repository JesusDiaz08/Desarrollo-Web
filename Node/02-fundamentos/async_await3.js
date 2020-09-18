let empleados = [{
    id: 1,
    nombre: "Jesus"
}, {
    id: 2,
    nombre: "Pamela"
}, {
    id: 3,
    nombre: "Roberto"
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

/** Transformando la funcion empleado en una promesa usando async */
let getEmpleado = async(id) => {

    // Promesa
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${id}`);
    } else {
        return (empleadoDB);
    }

};

let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No se encontró un salario para el empleado ${empleado.nombre}`);
        /* Solo se ejecuta 1 vez :
			reject(`No se encontró un salario para el empleado ${empleado.nombre}`);
            reject(`No se encontró un salario para el empleado ${empleado.nombre}`);
            reject(`No se encontró un salario para el empleado ${empleado.nombre}`);*/
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };
    }
};


let getInfo = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `${resp.nombre} tiene un salario de ${resp.salario}$`;
};

getInfo(2)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));