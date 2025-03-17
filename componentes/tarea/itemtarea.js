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


  let texto = document.createElement('label');
  texto.textContent = tarea;

  div.appendChild(checkbox);
  div.appendChild(texto);

  cadatarea.appendChild(div);

  return cadatarea;
}

export { item };