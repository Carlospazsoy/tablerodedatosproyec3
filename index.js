
// Función para cargar los datos y generar la gráfica
async function cargarDatos() {
  const grafica = document.getElementById("myChart").getContext("2d");
  const response = await fetch('http://ucamp.alumnos.dev4humans.com.mx/Main/endpoint_ingresos_mensuales');
  const data = await response.json();
  const etiquetas = data.data.map(item => item.nombre.toUpperCase());
  const ingresosMensuales = data.data.map(item => item.monto);
  generarGrafica(grafica, etiquetas, ingresosMensuales);
  mostrarTabla(data);
}
// Función para generar la gráfica
function generarGrafica(grafica, etiquetas, ingresosMensuales) {
  new Chart(grafica, {
    type: 'bar',
    data: {
      labels: etiquetas,
      datasets: [{
        label: 'Ingreso Mensual',
        data: ingresosMensuales,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
// Función para mostrar la tabla de datos
function mostrarTabla(data) {
  const tblFinanzas = document.getElementById("tblFinanzas");
  tblFinanzas.innerHTML = "";
  for (const usuario of data.data) {
    let tr = `<tr>
              <td>${usuario.id}</td>
              <td>${usuario.nombre}</td>
              <td>${usuario.monto}</td>
            </tr>`;
    tblFinanzas.innerHTML += tr;
  }
}
// Llamada a la función cargarDatos
cargarDatos();
