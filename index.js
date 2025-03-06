import { formulario } from "./componentes/formulario/formulario.js";
import { header } from "./componentes/header/header.js";
import { Cargartarea } from "./componentes/tarea/tarea.js";

let DOM = document.querySelector("#root");

function cargarDOM(){
    DOM.appendChild(header());
    let seccionTa = document.createElement('div');
    seccionTa.id = 'secciontt';
    seccionTa.appendChild(Cargartarea());
    DOM.appendChild(seccionTa);
    DOM.appendChild(formulario());
}

cargarDOM();

export {cargarDOM}


//DOM.innerText = "Hola mundo"

