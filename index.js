import { header } from "./componentes/header/header.js";
import { consultarTareasbackEnd, agregarTarea } from "./componentes/tarea/tarea.js";
import { dd } from "./forms/Login/login.js";
import { Inf } from "./forms/registro/registro.js";
import { formulario } from "./componentes/formulario/formulario.js"; // Importar el formulario

let DOM = document.querySelector("#root");

// Mostrar formulario de login inicialmente
cargarDD();

function cargarDOM() {
    DOM.innerHTML = ""; // Limpiar el DOM

    // Agregar el header
    DOM.appendChild(header());

    // Crear un contenedor para las tareas
    let seccionTareas = document.createElement('div');
    seccionTareas.id = "seccion-tareas";
    DOM.appendChild(seccionTareas);

    // Cargar las tareas
    consultarTareasbackEnd();

    // Agregar el formulario de tareas
    DOM.appendChild(formulario());
}
function cargarDD() {
    const ppadElement = dd();
    DOM.innerHTML = ""; // Limpiar el DOM
    DOM.appendChild(ppadElement);
}

function cargarInf() {
    const infElement = Inf();
    DOM.innerHTML = ""; // Limpiar el DOM
    DOM.appendChild(infElement);
}

export { cargarDOM, cargarDD, cargarInf };