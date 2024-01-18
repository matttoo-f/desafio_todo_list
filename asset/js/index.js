// Elementos del DOM
const tareaInput = document.getElementById("tareaInput");
const agregarBtn = document.getElementById("agregar");
const tareasList = document.getElementById("tareas");
const borrarLista = document.getElementById("borrarLista")
const cantidadTotal = document.getElementById("total")
const cantidadRealizada = document.getElementById("realizadas")

let tareas = [{id: Date.now(), tarea: tareaInput.value, completado: false}]


function contarTareas() {
    const totalTareas = tareas.length;
    cantidadTotal.innerHTML = totalTareas;

}

function borrar(id) {
    const index = tareas.findIndex((ele) => ele.id == id);
    tareas.splice(index, 1);

    let tareaIngresada = "";
    for (let tarea of tareas) {
        tareaIngresada += `<li>${tarea.tarea}<button onclick="borrar(${tarea.id})"> x </button> </li>`;
    }
    tareasList.innerHTML = tareaIngresada;
    contarTareas()
}

// Eventos
agregarBtn.addEventListener("click", () => {
    const nuevaTarea = { id: Date.now(), tarea: tareaInput.value, completado: false };
    tareas.push(nuevaTarea);
    tareaInput.value = "";

    let tareaIngresada = "";
    for (let tarea of tareas) {
        tareaIngresada += `<li>${tarea.tarea} <button onclick="borrar(${tarea.id})">x</button></li>`;
    }
    tareasList.innerHTML = tareaIngresada;
    contarTareas()
});


borrarLista.addEventListener ("click", function(){
    tareasList.innerHTML = ""
    tareas = []
    contarTareas()
})
