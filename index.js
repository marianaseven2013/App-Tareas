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

    DOM.appendChild(header());

    let seccionTareas = document.createElement('div');
    seccionTareas.id = "seccion-tareas";
    DOM.appendChild(seccionTareas);

    consultarTareasbackEnd();

    DOM.appendChild(formulario());
}
function cargarDD() {
    const ppadElement = dd();
    DOM.innerHTML = ""; 
    DOM.appendChild(ppadElement);
}

function cargarInf() {
    const infElement = Inf();
    DOM.innerHTML = ""; 
    DOM.appendChild(infElement);
}

export { cargarDOM, cargarDD, cargarInf };