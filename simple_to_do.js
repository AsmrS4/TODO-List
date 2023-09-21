const INPUT_FIELD = document.getElementById("input_row");
const TODO_LIST = document.getElementById("todo_list");

function addTask() {
    if (INPUT_FIELD.value === '') {
        alert("Create a task, please");
    } else {
        let li = document.createElement("li");
        li.innerHTML = INPUT_FIELD.value;
        TODO_LIST.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    INPUT_FIELD.value = '';
    saveData();
}

TODO_LIST.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("completed_task");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    saveData();
}, false)

function saveData(){
    localStorage.setItem('data', TODO_LIST.innerHTML);
}

function showTasks(){
    TODO_LIST.innerHTML=localStorage.getItem("data");
}

showTasks();