import { agregartarea } from "./funcionesformulario.js";
import { rendeTareas } from "../tarea/tarea.js";

function formulario() {
    let fot = document.createElement('div');
    fot.className = "contenedorf";

    let bag = document.createElement('input');
    bag.type = "text";
    bag.placeholder = "";
    bag.className = "fori";

    let bot = document.createElement('button');
    bot.textContent = "Add";
    bot.className = "botonf";
    bot.addEventListener('click', () => { agregartarea() });

    let bott = document.createElement('button');
    bott.textContent = "Regresar al Login";
    bott.className = "botonR";

    // Evento para regresar al login
    bott.addEventListener('click', () => {
        const DOM = document.querySelector("#root");
        if (DOM) {
            DOM.innerHTML = ""; // Limpiar el contenido actual
            import("../../index.js").then(module => {
                const { cargarDD } = module;
                cargarDD(); // Cargar el formulario de login
            }).catch(error => {
                console.error("Error al cargar el módulo:", error);
            });
        }
    });

    fot.appendChild(bag);
    fot.appendChild(bot);
    fot.appendChild(bott);

    return fot;
}

export { formulario };