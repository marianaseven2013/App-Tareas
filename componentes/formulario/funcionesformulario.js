import { consultarTareasbackEnd } from "../tarea/tarea.js";

function agregartarea() {
  let tareaForm = document.querySelector(".fori").value;

  if (!tareaForm.trim()) {
      alert("Por favor, ingresa una tarea.");
      return;
  }

  const usuario = JSON.parse(localStorage.getItem('usuario'));
  if (!usuario || !usuario.id) {
      alert("Usuario no identificado. Por favor, inicia sesión nuevamente.");
      return;
  }

  console.log("Enviando tarea:", { nombre_tarea: tareaForm, usuario_id: usuario.id }); // Depuración

  fetch('http://localhost:3000/tareas', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          nombre_tarea: tareaForm,
          usuario_id: usuario.id
      })
  })
  .then(response => {
      console.log("Respuesta del servidor:", response); 
      if (!response.ok) {
          throw new Error('Error en la solicitud');
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
      alert("Error al agregar la tarea");
  });
}
export { agregartarea };