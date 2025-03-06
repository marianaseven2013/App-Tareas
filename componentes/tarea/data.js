function consultarTareas(){
    fetch('http://localhost:3000/tareas')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}


let listado = ["Drink 8 glasses of water",
    "Meditate for 10 minutes",
    "Read a chapter of a book",
    "Go for a 30-minute walk",
    "Write in a gratitude journal",
    "Plan meals for the day",
    "Practice deep breathingexercises",
    "Stretch for 15 minutes",
"Practice deep breathingexercises"]

    export {listado}