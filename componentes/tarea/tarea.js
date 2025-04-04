import { item } from "./itemtarea.js";

// Función para consultar tareas desde el backend
function consultarTareasbackEnd() {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    const token = localStorage.getItem('token');
    
    if (!usuario || !usuario.id || !token) {
        console.error("Usuario no autenticado. Por favor, inicia sesión nuevamente.");
        // Redirigir al login si no hay token
        if (typeof cargarDD === 'function') {
            cargarDD();
        }
        return;
    }

    fetch(`http://localhost:3000/tareas`, {
        headers: {
            'Authorization': `Bearer ${token}` // Enviar token en el header
        }
    })
    .then(response => {
        if (response.status === 401 || response.status === 403) {
            localStorage.removeItem('usuario');
            localStorage.removeItem('token');
            if (typeof cargarDD === 'function') {
                cargarDD();
            }
            throw new Error('Sesión expirada. Por favor, inicia sesión nuevamente.');
        }
        if (!response.ok) {
            throw new Error(`Error del servidor: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Datos recibidos del backend:', data);
        if (!Array.isArray(data)) {
            throw new Error('Formato de datos inválido recibido del servidor');
        }
        cargarT(data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert(error.message);
    });
}

function cargarT(data) {
    let seccionTareas = document.querySelector("#seccion-tareas");
    if (!seccionTareas) {
        console.error("No se encontró el contenedor de tareas (#seccion-tareas)");
        return;
    }

    seccionTareas.innerHTML = "";

    try {
        const tareasElement = rendeTareas(data);
        if (tareasElement) {
            seccionTareas.appendChild(tareasElement);
        }
    } catch (error) {
        console.error('Error al renderizar tareas:', error);
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = 'Error al cargar las tareas. Por favor, intenta nuevamente.';
        seccionTareas.appendChild(errorElement);
    }
}

function rendeTareas(data) {
    if (!Array.isArray(data)) {
        console.error('Datos no son un array:', data);
        throw new Error('Los datos de tareas no son válidos');
    }

    let div = document.createElement('div');
    div.className = "listt";

    let titulo = document.createElement('h1');
    titulo.textContent = "Mis Tareas";
    div.appendChild(titulo);

    if (data.length === 0) {
        const mensaje = document.createElement('p');
        mensaje.textContent = "No hay tareas registradas. ¡Agrega tu primera tarea!";
        div.appendChild(mensaje);
    } else {
        data.forEach((element) => {
            if (element && element.nombre_tarea) {
                div.appendChild(item(element.nombre_tarea));
            } else {
                console.warn('Elemento de tarea inválido:', element);
            }
        });
    }

    return div;
}

function agregarTarea(nombre_tarea) {
    const token = localStorage.getItem('token');
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    
    if (!token) {
        alert("No estás autenticado. Por favor, inicia sesión.");
        if (typeof cargarDD === 'function') {
            cargarDD();
        }
        return;
    }

    if (!usuario || !usuario.id) {
        alert("Información de usuario no disponible. Por favor, inicia sesión nuevamente.");
        localStorage.removeItem('token');
        if (typeof cargarDD === 'function') {
            cargarDD();
        }
        return;
    }

    if (!nombre_tarea || nombre_tarea.trim() === '') {
        alert("Por favor, ingresa un nombre para la tarea");
        return;
    }

    console.log('Token que se enviará:', token);
    console.log('ID de usuario:', usuario.id);

    fetch('http://localhost:3000/tareas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ 
            nombre_tarea,
            usuario_id: usuario.id
        }), 
    })
    .then(response => {
        if (response.status === 401 || response.status === 403) {
            localStorage.removeItem('usuario');
            localStorage.removeItem('token');
            if (typeof cargarDD === 'function') {
                cargarDD();
            }
            throw new Error('Sesión expirada. Por favor, inicia sesión nuevamente.');
        }
        if (!response.ok) {
            throw new Error(`Error del servidor: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.mensaje === 'Tarea agregada con éxito') {
            consultarTareasbackEnd();
        } else {
            throw new Error(data.error || 'Error al agregar tarea');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert(error.message);
    });
}

export { consultarTareasbackEnd, agregarTarea, rendeTareas };