function marcarTexto(){
  
        //Se le indica que solo funcionara en las dos, es decir en el chequesito y el recuadro, al momento de apachar cualquiera de los dos, se marcará todo el recuadro con las ordenes/ diseñoo que se le dio
        if (this.target !== this.querySelector('.chequesi')) {
            this.querySelector('.chequesi').checked = !this.querySelector('.chequesi').checked;
        }

        //tacha el texto, con la línea que se le coloca
        this.querySelector('label').classList.toggle('marca', this.querySelector('.chequesi').checked);
        //Esta línea dice o manda la orden de que cuando se seleccione o se vuelva a apachar, se quite el color o más buen lo cambie
        this.classList.toggle('marcacch', this.querySelector('.chequesi').checked);
}

export {marcarTexto}