function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerText = taskText;
    li.appendChild(span);

    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.onclick = function () {
        let newText = prompt("Edit task:", span.innerText);
        if (newText) {
            span.innerText = newText;
        }
    };

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
}
