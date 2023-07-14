async function cargarDatos() {
    const grafica = document.getElementById("myChart").getContext("2d");
  
    const response = await fetch('http://ucamp.alumnos.dev4humans.com.mx/Main/endpoint_ingresos_mensuales');
    const data = await response.json();
  
    const etiquetas = data.data.map(item => item.nombre.toUpperCase());
    const ingresosMensuales = data.data.map(item => item.ingresos_mensuales);
  
    new Chart(grafica, {
      type: 'bar',
      data: {
        labels: etiquetas,
        datasets: [{
          label: 'Ingresos Mensuales',
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
  
  cargarDatos();
  

