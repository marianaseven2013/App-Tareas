import { consultarTareasbackEnd } from "../tarea/tarea.js";

function agregartarea() {
  let tareaForm = document.querySelector(".fori").value;
  const token = localStorage.getItem('token');
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  if (!tareaForm.trim()) {
    alert("Por favor, ingresa una tarea.");
    return;
  }

  if (!usuario || !usuario.id) {
    alert("Usuario no identificado. Por favor, inicia sesión nuevamente.");
    return;
  }

  if (!token) {
    alert("No estás autenticado. Por favor, inicia sesión.");
    return;
  }

  console.log("Enviando tarea:", { 
    nombre_tarea: tareaForm, 
    usuario_id: usuario.id 
  });

  fetch('http://localhost:3000/tareas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      nombre_tarea: tareaForm,
      usuario_id: usuario.id
    })
  })
  .then(response => {
    console.log("Respuesta del servidor:", response);
    if (response.status === 401 || response.status === 403) {
      localStorage.removeItem('token');
      localStorage.removeItem('usuario');
      throw new Error('Sesión expirada. Por favor, inicia sesión nuevamente.');
    }
    if (!response.ok) {
      throw new Error(`Error del servidor: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Tarea agregada con éxito:', data);
    document.querySelector(".fori").value = "";
    consultarTareasbackEnd();
  })
  .catch(error => {
    console.error('Hubo un problema con la solicitud:', error);
    alert(error.message || "Error al agregar la tarea");
  });
}

export { agregartarea };