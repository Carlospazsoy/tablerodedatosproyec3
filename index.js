
import { generarGrafica, mostrarTabla } from './modulacion.js';

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

cargarDatos();


