
function header(){
    let header = document.createElement('header');
    header.className = "hheader";


    let logo = document.createElement('img');
    logo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGpKB7oENx8nf9QjvVqPGBhUM_O8VfWS7JsqCNGGsdzdONu7TsqCsFVvApso8HTn5qik&usqp=CAU";
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