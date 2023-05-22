// solicitudes.js

function mostrarSolicitudesCargadas() {

    // Al cargar la siguiente página
const trabajadores = JSON.parse(localStorage.getItem('trabajadores')) || [];

    const solicitudesList = document.getElementById('solicitudesList');
    solicitudesList.innerHTML = ''; // Limpiar contenido previo
  
    if (trabajadores.length === 0) {
      solicitudesList.innerHTML = '<p>No se han cargado solicitudes.</p>';
      return;
    }
  
    const table = document.createElement('table');
    table.classList.add('table');
    table.innerHTML = `
      <thead>
        <tr>
          <th scope="col">Legajo</th>
          <th scope="col">Hoja</th>
          <th scope="col">Franco</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    `;
  
    const tbody = table.querySelector('tbody');
  
    for (const trabajador of trabajadores) {
      for (const pedido of trabajador.pedido) {
        const row = document.createElement('tr');
        const legajoCell = document.createElement('td');
        legajoCell.textContent = trabajador.legajo;
        const hojaCell = document.createElement('td');
        hojaCell.textContent = pedido[0];
        const francoCell = document.createElement('td');
        francoCell.textContent = pedido[1];
  
        row.appendChild(legajoCell);
        row.appendChild(hojaCell);
        row.appendChild(francoCell);
  
        tbody.appendChild(row);
      }
    }
  
    solicitudesList.appendChild(table);
  }
  
  