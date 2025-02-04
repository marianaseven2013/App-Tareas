import { formulario } from "./componentes/formulario/formulario.js";
import { header } from "./componentes/header/header.js";
import { tarea } from "./componentes/tarea/tarea.js";

let DOM = document.querySelector("#root");


DOM.appendChild(tarea())
DOM.appendChild(formulario())
DOM.appendChild(header());
//DOM.innerText = "Hola mundo"

