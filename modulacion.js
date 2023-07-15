// Función para generar la gráfica
export function generarGrafica(grafica, etiquetas, ingresosMensuales) {
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
 export function mostrarTabla(data) {
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