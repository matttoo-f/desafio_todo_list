// Elementos del DOM------------------------------->

const input = document.getElementById("input")
const addBtn = document.getElementById("add")
const total = document.getElementById("total")
const pending = document.getElementById("pendientes")
const ready = document.getElementById("realizadas")
const taskList = document.getElementById("listaTareas")

// variables---------------------------------------->

let taskArray = [{id:Date.now(), task: "Respasar guía de estudios", ready: false},
                 {id:Date.now() + 1, task: "Comenzar desafío", ready: false},
                 {id:Date.now() + 2, task: "Finalizar desafío", ready: false},
]


// eventos------------------------------------------>
// mostrar primeras 3 tareas
document.addEventListener("DOMContentLoaded",()=> {
    let html = ""
    for (let task of taskArray) {
        let taskClass = task.ready ? 'ready' : 'pending'
        html += `<tr class="${taskClass}"><td>${task.id}</td><td>${task.task}</td><td><button onclick="btnReady(${task.id})">Ready</button></td><td><button class="taskDelete" onclick="borrar(${task.id})">X</button></td></tr>`    
    }
    taskList.innerHTML = html
    contar()
})

// evento para agregar tareas
addBtn.addEventListener("click",()=> {
    const newTask = input.value
    taskArray.push({id: Date.now(), task: newTask, ready: false})
    input.value = ""

    let html = ""
    for(let task of taskArray){
        let taskClass = task.ready ? 'ready' : 'pending'
        html += `<tr class="${taskClass}"><td>${task.id}</td><td>${task.task}</td><td><button onclick="btnReady(${task.id})">Ready</button></td><td><button class="taskDelete" onclick="borrar(${task.id})">X</button></td></tr>`    
    }
    taskList.innerHTML = html
    if (newTask == ""){
        html =""
    }
    contar()
})

// Funciones----------------------------------------->
// funcion para borrar tareas
function borrar (id){
    const index = taskArray.findIndex((ele) => ele.id == id )
    taskArray.splice(index, 1)

    let html = ""
    for(let task of taskArray){
        let taskClass = task.ready ? 'ready' : 'pending'
        html += `<tr class="${taskClass}"><td>${task.id}</td><td>${task.task}</td><td><button onclick="btnReady(${task.id})">Ready</button></td><td><button class="taskDelete" onclick="borrar(${task.id})">X</button></td></tr>`    
    }
    taskList.innerHTML = html
    contar()
}

// funcion para contar tareas realizadas ,pendientes y totales

function contar(){
    let count = taskArray.length
    total.innerHTML = count

    let completedTasks = taskArray.filter(task => task.ready).length;
    let pendingTasks = count - completedTasks;

    ready.innerHTML = completedTasks;
    pending.innerHTML = pendingTasks;
}

// funcion para marcar como completada una tarea
function btnReady(id){
    const index = taskArray.findIndex((ele)=> ele.id == id)
    if (index !== -1 && !taskArray[index].ready){
        taskArray[index].ready = true
        
        let html = ""
        for (let task of taskArray) {
            let taskClass = task.ready ? 'ready' : 'pending';
            html += `<tr class="${taskClass}"><td>${task.id}</td><td>${task.task}</td><td><button onclick="btnReady(${task.id})">Ready</button></td><td><button class="taskDelete" onclick="borrar(${task.id})">X</button></td></tr>`;
        }
        taskList.innerHTML = html
    }
    contar()
}
