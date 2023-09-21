const INPUT_FIELD = document.getElementById("input_row");
const TODO_LIST = document.getElementById("todo_list");

function addTask(){
    if(INPUT_FIELD.value === ''){
        alert("Create a task, please");
    }else{
        let li = document.createElement("li");
        li.innerHTML = INPUT_FIELD.value;
        TODO_LIST.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    INPUT_FIELD.value = '';
}