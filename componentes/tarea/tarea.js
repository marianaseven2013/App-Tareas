import {item} from "./itemtarea.js"

function consultarTareasbackEnd(){
    fetch('http://localhost:3000/usuarios')
    .then(response => response.json())
    .then(data => cargarT(data))
    .catch(error => console.error('Error:', error));

}

function cargarT(data){
    let DOM = document.querySelector("#root");
    DOM.appendChild(rendeTareas(data));

}

function rendeTareas(data) {

    let div = document.createElement('div');
    div.className = "listt";

    let titulo = document.createElement('h1');
    titulo.textContent = "Personal";
    div.appendChild(titulo);

    data.forEach((element) => {
        console.log(element.nombre_tarea);
        div.appendChild(item(element.nombre_tarea));
    });

    return div;

}

export {consultarTareasbackEnd}