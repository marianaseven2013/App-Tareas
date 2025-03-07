import { marcarTexto } from "./funcionestarea.js";

function item(tarea) {
  let cadatarea = document.createElement('div');
    let div = document.createElement('div');
        div.className = "trdiv";

        div.addEventListener('click', marcarTexto);

        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.className = "chequesi";
        div.appendChild(checkbox);  

        let texto = document.createElement('label'); 
        texto.textContent = tarea;
/*         div.appendChild(tareaTexto);
 */        div.appendChild(texto);

        cadatarea.appendChild(div);



    //Esto es para agregar la función de que cuando se apache el cuadro de texto cambie o se marque
/*     div.addEventListener('click', marcarTexto);
 */

    return cadatarea;
}

export {item}