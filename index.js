import { header } from "./componentes/header/header.js";
import { consultarTareasbackEnd } from "./componentes/tarea/tarea.js";
import { dd } from "./forms/Login/login.js";
import { Inf } from "./forms/registro/registro.js"; 

let DOM = document.querySelector("#root");

function cargarDOM() {
   DOM.innerHTML = ""; 
   DOM.appendChild(header());
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

// Mostrar formulario de login inicialmente
cargarDD();
