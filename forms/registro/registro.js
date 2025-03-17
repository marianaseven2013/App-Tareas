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

    let bttnR = document.createElement('button');
    bttnR.innerText = "Regresar al Login";
    bttnR.className = "regBT";

    btnRegistro.addEventListener('click', () => {
        const nombre = inputNombre.value.trim();
        const email = inputEmail.value.trim();
        const fecha = inputFecha.value;
        const password = inputPassword.value.trim();
    
        if (nombre === '' || email === '' || fecha === '' || password === '') {
            alert("Por favor, completa todos los campos.");
        } else {
            fetch('http://localhost:3000/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ usuario: nombre, contraseña: password, correo: email }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.mensaje === 'Usuario registrado con éxito') {
                    alert("Cuenta creada con éxito!");
                    // Redirigir al login o hacer algo más
                } else {
                    alert("Error al registrar usuario");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("Error al registrar usuario");
            });
        }
    });

    // Evento para el botón "Regresar al Login"
    bttnR.addEventListener('click', () => {
        const DOM = document.querySelector("#root");
        if (DOM) {
            // Importar dinámicamente el módulo de login
            import("../Login/login.js") // <-- Ruta corregida
                .then(module => {
                    const { dd } = module;
                    DOM.innerHTML = ""; // Limpiar el contenido actual
                    DOM.appendChild(dd()); // Mostrar el formulario de login
                })
                .catch(error => {
                    console.error("Error al cargar el módulo de login:", error);
                });
        }
    });

    contenedor.appendChild(titulo);
    contenedor.appendChild(inputNombre);
    contenedor.appendChild(inputEmail);
    contenedor.appendChild(inputFecha);
    contenedor.appendChild(inputPassword);
    contenedor.appendChild(btnRegistro);
    contenedor.appendChild(bttnR);

    Cpa.appendChild(fondo);
    Cpa.appendChild(contenedor);

    return Cpa;
}

export { Inf };