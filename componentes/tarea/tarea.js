import { listado } from "./data.js";
import { item } from "./itemtarea.js";

function Cargartarea() {
    let div = document.createElement('div');
    div.className = "listt";

    let titulo = document.createElement('h1');
    titulo.textContent = "Personal";
    div.appendChild(titulo);

    div.appendChild(item(listado));

    return div;
    }


export {Cargartarea}