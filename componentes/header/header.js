function header(){
    let header = document.createElement('header');
    header.className = "hheader";
    let logo = document.createElement('img');
    logo.src = "https://i.pinimg.com/736x/8b/ba/68/8bba68de5411d9c842b07e4f3ecf1b29.jpg";
    logo.alt = "logo";
    header.appendChild(logo);
/*     let h1 = document.createElement('h1');
    h1.textContent = "hola";
    header.appendChild = (h1); */
    let texto = document.createElement('h1');
    texto.textContent = "Proyecto APP ";
    header.appendChild(texto);
    return header;
}
export {header}