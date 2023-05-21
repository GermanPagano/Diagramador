
//  hojas y los francos
// estas hojas deberian importarse desde un json externo.
const hojas = [
  { nombre: 701, turnos: [1,2,3,4,5,6,7] },
  { nombre: 702, turnos: [1,2,3,4,5,6,7] },
  { nombre: 703, turnos: [1,2,3,4,5,6,7] },
  { nombre: 704, turnos: [1,2,3,4,5,6,7] },
  { nombre: 705, turnos: [1,2,3,4,5,6,7] },
  { nombre: 706, turnos: [1,2,3,4,5,6,7] },
  { nombre: 707, turnos: [1,2,3,4,5,6,7] },
  { nombre: 708, turnos: [1,2,3,4,5,6,7] },
  { nombre: 709, turnos: [1,2,3,4,5,6,7] },
  { nombre: 710, turnos: [1,2,3,4,5,6,7] },
];

// objeto de trabajadores
const trabajadores = [
  { legajo: 21083,  pedido: [ [ 708, 3],[ 709,3 ] ], diagramado: [] },
  { legajo: 14247,  pedido: [ [ 708, 3],[ 709,3 ] ], diagramado: [] },
  { legajo: 21084,  pedido: [ [ 705, 7],[ 709,7 ] ], diagramado: [] },
  { legajo: 14248,  pedido: [ [ 705, 7],[ 704,7 ] ], diagramado: [] },
];

document.getElementById("solicitudForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los inputs
    const legajo = document.getElementById("legajo").value;
    const hoja = document.getElementById("hoja").value;
    const franco = document.getElementById("franco").value;

    // Crear un nuevo objeto para el legajo ingresado
    const nuevoTrabajador = {
        legajo: parseInt(legajo),
        pedido: [[parseInt(hoja), parseInt(franco)]],
        diagramado: []
    };

    // Agregar el nuevo objeto al array de trabajadores
    trabajadores.push(nuevoTrabajador);
    
    console.log( trabajadores )
    // Limpiar los valores de los inputs
    document.getElementById("legajo").value = "";
    document.getElementById("hoja").value = "";
    document.getElementById("franco").value = "";

    // Realizar las operaciones necesarias con los valores obtenidos
    // ...
});


const diagramador = () => {
    trabajadores.sort((a, b) => a.legajo - b.legajo);
    for (const empleado of trabajadores) {
        for (const pedido of empleado.pedido) {
            const hoja = hojas.find((hoja) => hoja.nombre === pedido[0]);
            if (hoja) {
                const indiceFranco = hoja.turnos.indexOf(pedido[1]);
                if (indiceFranco !== -1) {
                    empleado.diagramado.push({
                        hoja: pedido[0],
                        franco: pedido[1],
                    });
                    hoja.turnos.splice(indiceFranco, 1);
                    break; // Salir del bucle interno cuando se encuentra un pedido disponible
                }
            }
        }
    }

    // Imprimir los resultados
    for (const empleado of trabajadores) {
        console.log(`El trabajador ${empleado.legajo} está diagramado en:`);
        if (empleado.diagramado.length > 0) {
            for (const diagrama of empleado.diagramado) {
                console.log(`- Hoja: ${diagrama.hoja}, Franco: ${diagrama.franco}`);
            }
        } else {
            console.log("No se pudo asignar ningún diagrama al trabajador.");
        }
    }
};

diagramador();
