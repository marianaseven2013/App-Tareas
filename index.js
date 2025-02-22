import { formulario } from "./componentes/formulario/formulario.js";
import { header } from "./componentes/header/header.js";
import { tarea } from "./componentes/tarea/tarea.js";

let DOM = document.querySelector("#root");

function cargarDOM(){
    DOM.appendChild(header());
    DOM.appendChild(tarea())
    DOM.appendChild(formulario())
}

cargarDOM();

export {cargarDOM}


//DOM.innerText = "Hola mundo"

