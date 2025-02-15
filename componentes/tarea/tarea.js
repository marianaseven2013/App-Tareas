import { listado } from "../formulario/data.js";

function item(tareaTexto) {
    let div = document.createElement('div');
    div.className = "trdiv";

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.className = "chequesi";

    let texto = document.createElement('label'); 
    texto.textContent = tareaTexto;

    //Esto es para agregar la función de que cuando se apache el cuadro de texto cambie o se marque
    div.addEventListener('click', function (event) {

        //Se le indica que solo funcionara en las dos, es decir en el chequesito y el recuadro, al momento de apachar cualquiera de los dos, se marcará todo el recuadro con las ordenes/ diseñoo que se le dio
        if (event.target !== this.querySelector('.chequesi')) {
            this.querySelector('.chequesi').checked = !this.querySelector('.chequesi').checked;
        }

        //tacha el texto, con la línea que se le coloca
        this.querySelector('label').classList.toggle('marca', this.querySelector('.chequesi').checked);
        //Esta línea dice o manda la orden de que cuando se seleccione o se vuelva a apachar, se quite el color o más buen lo cambie
        this.classList.toggle('marcacch', this.querySelector('.chequesi').checked);
    });

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
