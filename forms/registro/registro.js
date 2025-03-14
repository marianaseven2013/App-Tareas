function Inf() {
    let Cpa = document.createElement('div');
    Cpa.className = "C-pa";

    let fondo = document.createElement('img');
    fondo.src = "https://i.pinimg.com/736x/99/26/93/992693d97c26b8d9521a860ff56beb27.jpg";
    fondo.alt = "Fondo";

    let contenedor = document.createElement('div');
    contenedor.className = "prin form-container";

    let titulo = document.createElement('div');
    titulo.className = "holas label";  
    titulo.innerText = "Regístrate para obtener tu correo";

    let inputNombre = document.createElement('input');
    inputNombre.type = "text";
    inputNombre.placeholder = "Tu Nombre";
    inputNombre.className = "input-nombre input-field";

    let inputEmail = document.createElement('input');
    inputEmail.type = "email";
    inputEmail.placeholder = "Nombre de tu nuevo Correo";
    inputEmail.className = "input-email input-field";

    let inputFecha = document.createElement('input');
    inputFecha.type = "date";
    inputFecha.className = "input-fecha input-field";

    let inputPassword = document.createElement('input');
    inputPassword.type = "password";
    inputPassword.placeholder = "Tu nueva Contraseña";
    inputPassword.className = "input-password input-field";

    let btnRegistro = document.createElement('button');
    btnRegistro.innerText = "Crear Cuenta";
    btnRegistro.className = "Reg register-button";

    btnRegistro.addEventListener('click', () => {
        const nombre = inputNombre.value.trim();
        const email = inputEmail.value.trim();
        const fecha = inputFecha.value;
        const password = inputPassword.value.trim();

        if (nombre === '' || email === '' || fecha === '' || password === '') {
            alert("Por favor, completa todos los campos.");
        } else {
            alert("Cuenta creada con éxito!");
        }
    });

    contenedor.appendChild(titulo);
    contenedor.appendChild(inputNombre);
    contenedor.appendChild(inputEmail);
    contenedor.appendChild(inputFecha);
    contenedor.appendChild(inputPassword);
    contenedor.appendChild(btnRegistro);

    Cpa.appendChild(fondo);
    Cpa.appendChild(contenedor);

    return Cpa;
}

export { Inf };
