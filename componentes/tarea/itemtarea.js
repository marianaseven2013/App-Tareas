import { marcarTexto } from "./funcionestarea.js";

function item(tarea) {
  let cadatarea = document.createElement('div');
  cadatarea.className = "tarea-item";

  let div = document.createElement('div');
  div.className = "trdiv";

  // Checkbox para marcar la tarea como completada
  let checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.className = "chequesi";
  checkbox.addEventListener('change', marcarTexto);

  // Texto de la tarea
  let texto = document.createElement('label');
  texto.textContent = tarea;

  // Agregar el checkbox y el texto al div
  div.appendChild(checkbox);
  div.appendChild(texto);

  // Agregar el div al contenedor de la tarea
  cadatarea.appendChild(div);

  return cadatarea;
}

export { item };