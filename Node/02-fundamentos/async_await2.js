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

let getEmpleado = (id) => {

    // Promesa
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
};

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontró un salario para el empleado ${empleado.nombre}`);
            /* Solo se ejecuta 1 vez :
			reject(`No se encontró un salario para el empleado ${empleado.nombre}`);
            reject(`No se encontró un salario para el empleado ${empleado.nombre}`);
            reject(`No se encontró un salario para el empleado ${empleado.nombre}`);*/
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}


let getInfo = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `${resp.nombre} tiene un salario de ${resp.salario}$`;
};

getInfo(10)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));