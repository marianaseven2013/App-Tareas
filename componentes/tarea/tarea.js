import { listado } from "../formulario/data.js";

function item(tareaTexto) {
    let div = document.createElement('div');
    div.className = "trdiv";

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.className = "tareacheck";

    let texto = document.createElement('label'); 
    texto.textContent = tareaTexto;

    div.appendChild(checkbox);  
    div.appendChild(texto);

    return div;
}

function tarea() {
    let div = document.createElement('div');
    div.className = "listt";

    let titulo = document.createElement('h1');
    titulo.textContent = "Personal";
    div.appendChild(titulo);

    listado.forEach((tareaTexto) => {
        div.appendChild(item(tareaTexto));
    });

    return div;
}

export {tarea}