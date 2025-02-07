function formulario() {
    let fot = document.createElement('div');
    fot.className = "contenedorf";

    let bag = document.createElement('input');
    bag.type = "text";
    bag.placeholder = "Write a task...";
    bag.className = "fori";

    let bot = document.createElement('button');
    bot.textContent = "Add";
    bot.className = "botonf";

    fot.appendChild(bag);
    fot.appendChild(bot);

    return fot;
}

export { formulario };