import { agregartarea } from "./funcionesformulario.js";

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
    bot.addEventListener('click', ()=> {agregartarea()});
 
 
    fot.appendChild(bag);
    fot.appendChild(bot);
 
 
    return fot;
 }
 
 
 export { formulario };
 
 