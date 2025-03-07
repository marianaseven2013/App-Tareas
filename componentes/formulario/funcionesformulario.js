import { Cargartarea } from "../tarea/tarea.js";

function agregartarea(){
    //En esta variable va a almacenar aquel elemento cuya clase se llama entradaformulaio, esto va a recuperar su contenido, ya sea texto etc.
   let tareaForm = document.querySelector(".fori").value; 
   listado.unshift(tareaForm); //agregar contenido a la lista, por eso se llama a la lista, lo que le indica agregar ese contenido.

   let prueba = document.querySelector("#secciontt");
   prueba.innerHTML = '';//Limpia y agrega lo nuevo.
   prueba.appendChild(Cargartarea());

    }

export {agregartarea}