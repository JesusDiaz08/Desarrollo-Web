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
    salario: 200
}];

/* Obtener un empleado por id
let getEmpleado = (id, callback) => {
	let empleadoDB = empleados.find(empleado => {
		return empleado.id === id;
	});
}*/

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${id}`);
    } else {
        callback(null, empleadoDB);
    }
};


let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No se encontró un salario para el empleado ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
}

getEmpleado(3, (err, empleado) => {
    if (err) {
        console.log(err)
        return;
    }
    //console.log(empleado);
    getSalario(empleado, (err, resp) => {
        if (err) {
            console.log(err);
            return;
        };
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}$`);
    })
});