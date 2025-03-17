  import { item } from "./itemtarea.js";

  function consultarTareasbackEnd() {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    if (!usuario || !usuario.id) {
        console.error("Usuario no identificado. Por favor, inicia sesión nuevamente.");
        return;
    }

    const usuario_id = usuario.id;

    fetch(`http://localhost:3000/tareas?usuario_id=${usuario_id}`)
        .then(response => response.json())
        .then(data => {
            console.log('Datos recibidos del backend:', data); // Verifica los datos recibidos
            cargarT(data); // Llamar a cargarT para renderizar las tareas
        })
        .catch(error => console.error('Error:', error));
}

function cargarT(data) {
  let seccionTareas = document.querySelector("#seccion-tareas");
  if (!seccionTareas) {
      console.error("No se encontró el contenedor de tareas (#seccion-tareas)");
      return;
  }

  seccionTareas.innerHTML = "";

  seccionTareas.appendChild(rendeTareas(data));
}

  function rendeTareas(data) {
    let div = document.createElement('div');
    div.className = "listt";

    let titulo = document.createElement('h1');
    titulo.textContent = "Personal";
    div.appendChild(titulo);

    data.forEach((element) => {
        div.appendChild(item(element.nombre_tarea));
    });

    return div;
}

  // Función para agregar una nueva tarea
  function agregarTarea(nombre_tarea, estado, usuario_id) {
    fetch('http://localhost:3000/tareas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre_tarea, estado, usuario_id }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json();
    })
    .then(data => {
        if (data.mensaje === 'Tarea agregada con éxito') {
            alert("Tarea agregada con éxito!");
            consultarTareasbackEnd(); // Recargar las tareas
        } else {
            alert("Error al agregar tarea: " + (data.mensaje || 'Respuesta inesperada del servidor'));
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Error al agregar tarea: " + error.message);
    });
}

  export { consultarTareasbackEnd, agregarTarea, rendeTareas};