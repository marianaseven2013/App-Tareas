import { header } from "./componentes/header/header.js";
import { consultarTareasbackEnd } from "./componentes/tarea/tarea.js";
/* import { rendeTareas } from "./componentes/tarea/tarea.js";
 */
import { formulario } from "./componentes/formulario/formulario.js";
let DOM = document.querySelector("#root");

function cargarDOM(){
   DOM.appendChild(header());
/*    /* let seccionTa = document.createElement('div'); */
  consultarTareasbackEnd();
  /*  seccionTa.id = 'secciontt';
   seccionTa.appendChild((rendeTareas));
   DOM.appendChild(seccionTa); */
   DOM.appendChild(formulario());
}


cargarDOM();

/* export {cargarDOM} */




//DOM.innerText = "Hola mundo"






