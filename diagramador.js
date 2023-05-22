document.addEventListener("DOMContentLoaded", function () {
  fetch("./services/hojas-Diagramas.json")
    .then((response) => response.json())
    .then((data) => {
      const hojas = data;
      console.log(
        `%c   ${hojas.length} DIAGRAMAS CARGADOS EXITOSAMENTE  `,
        "background: green"
      );

      const trabajadores = [];

      document
        .getElementById("solicitudForm")
        .addEventListener("submit", function (event) {
          event.preventDefault(); // Evitar el envío del formulario

          // Obtener los valores de los inputs
          const legajo = document.getElementById("legajo").value;
          const hojasInputs = document.getElementsByName("hoja");
          const francosInputs = document.getElementsByName("franco");

          const nuevoTrabajador = {
            legajo: parseInt(legajo),
            pedido: [],
            diagramado: [],
          };

          // Obtener los valores de los inputs de hojas y francos
          for (let i = 0; i < hojasInputs.length; i++) {
            const hoja = parseInt(hojasInputs[i].value);
            const franco = parseInt(francosInputs[i].value);
            nuevoTrabajador.pedido.push([hoja, franco]);
          }

          // Agregar el nuevo objeto al array de trabajadores
          trabajadores.push(nuevoTrabajador);
          console.log(trabajadores);

          // Limpiar los valores de los inputs
          document.getElementById("legajo").value = "";
          for (let i = 0; i < hojasInputs.length; i++) {
            hojasInputs[i].value = "";
            francosInputs[i].value = "";
          }
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
              console.log(
                `- Hoja: ${diagrama.hoja}, Franco: ${diagrama.franco}`
              );
            }
          } else {
            console.log("No se pudo asignar ningún diagrama al trabajador.");
          }
        }
      };

      diagramador();
    })
    .catch((error) => {
      console.error(
        "%cError al cargar el archivo hojas.json:",
        "color:red",
        error
      );
    });
});
