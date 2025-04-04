import { consultarTareasbackEnd } from "../../componentes/tarea/tarea.js";
import { header } from "../../componentes/header/header.js";
import { formulario } from "../../componentes/formulario/formulario.js";
import { cargarDOM } from "../../index.js"; 

function dd() {
    let ppad = document.createElement('div');
    ppad.className = "plogin";

    let fonim = document.createElement('img');
    fonim.src = "https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    fonim.alt = "logo";

    let llog = document.createElement('div');
    llog.className = "prin";

    let coor = document.createElement('div');
    coor.className = "coor";  
    coor.innerText = "Ingresa tu correo:";

    let cuemail = document.createElement('input');
    cuemail.type = "email";
    cuemail.placeholder = "Tu Correo electrónico";
    cuemail.className = "input-email";

    let contt = document.createElement('div');
    contt.className = "contt";  
    contt.innerText = "Ingrese su contraseña:";

    let cucont = document.createElement('input');
    cucont.type = "password";
    cucont.placeholder = "Tu Contraseña";
    cucont.className = "input-password";

    let ttitu = document.createElement('div');
    ttitu.className = "holas";  
    ttitu.innerText = "Ingresa para ver tu listado!";

    let hh = document.createElement('h1');
    hh.innerText = "No tienes una cuenta? Presiona acá y regístrate:";

    let butt = document.createElement('button');
    butt.innerText = "Crear Cuenta";
    butt.className = "Reg";

    let ing = document.createElement('button');
    ing.innerText = "Ingresar";
    ing.className = "sar";

    let bv = document.createElement('div');
    bv.className = "tt";  
    bv.innerText = "Regístrate e Ingresa";
    ing.addEventListener('click', () => {
        const email = cuemail.value.trim();
        const password = cucont.value.trim();
    
        fetch('http://localhost:3000/login', {
            method: 'POST',
            mode: 'cors', // Asegúrate de que está en modo cors
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ correo: email, contraseña: password }),
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(err.error || `Error HTTP: ${response.status}`);
                });
            }
            return response.json();
        })
        .then(data => {
            if (data.mensaje === 'Login exitoso') {
                localStorage.setItem('usuario', JSON.stringify(data.usuario));
                localStorage.setItem('token', data.token);
                
                const DOM = document.querySelector("#root");
                if (DOM) {
                    DOM.innerHTML = "";
                    cargarDOM();
                }
            } else {
                alert(data.error || "Credenciales incorrectas");
            }
        })
        .catch(error => {
            console.error('Error completo:', error);
            alert(error.message || "Error al conectar con el servidor. Verifica la consola para más detalles.");
        });
    });

    butt.addEventListener('click', () => {
        const DOM = document.querySelector("#root");
        if (DOM) {
            import("../registro/registro.js") 
                .then(module => {
                    const { Inf } = module;
                    DOM.innerHTML = ""; 
                    DOM.appendChild(Inf()); 
                })
                .catch(error => {
                    console.error("Error al cargar el módulo de registro:", error);
                });
        }
    });

    llog.appendChild(coor);
    llog.appendChild(cuemail);
    llog.appendChild(contt);
    llog.appendChild(cucont);
    llog.appendChild(ttitu);
    llog.appendChild(hh);
    llog.appendChild(butt);
    llog.appendChild(ing);

    ppad.appendChild(fonim);
    ppad.appendChild(llog);
    ppad.appendChild(bv);

    return ppad;
}

export { dd };