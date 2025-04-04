function marcarTexto(event) {
    // Evitar que el evento se propague y cause múltiples cambios
    if (event.target.type === 'checkbox') {
        event.stopPropagation();
        return;
    }
    
    const checkbox = this.querySelector('.chequesi');
    if (!checkbox) return;
    
    checkbox.checked = !checkbox.checked;
    
    const label = this.querySelector('label');
    if (label) {
        label.classList.toggle('marca', checkbox.checked);
    }
    this.classList.toggle('marcacch', checkbox.checked);
}

export {marcarTexto}