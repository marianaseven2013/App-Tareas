import { formulario } from "./componentes/formulario/formulario.js";
import { header } from "./componentes/header/header.js";
import { tarea } from "./componentes/tarea/tarea.js";

let DOM = document.querySelector("#root");

 


 



DOM.appendChild(header());
DOM.appendChild(tarea())
DOM.appendChild(formulario())


//DOM.innerText = "Hola mundo"

