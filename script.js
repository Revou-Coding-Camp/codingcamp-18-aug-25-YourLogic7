console.log("Hello, World!");

let listTodo = [];

/// Validate Form Inputs
function validateForm() {
    /// DOM Form Elements
    const taskInput = document.getElementById("task-input");
    const dueDateInput = document.getElementById("due-date-input");

    if (taskInput.value === '' || dueDateInput.value === '') {
        alert("Please enter a task.");
    } else {
        addTodo(taskInput.value, dueDateInput.value);
    }
}

/// Rtampilkan list todo
function renderTodoList() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = '';


    for (let i = 0; i < listTodo.length; i++) {
        taskList.innerHTML += `<li class="border-b py-2">${listTodo[i].task} - Due: ${listTodo[i].dueDate}</li>`;
    }
}

/// Add a new task
function addTodo(task, dueDate) {
    listTodo.push({
        task: task,
        dueDate: dueDate
    });

    renderTodoList();
}



/// Delete
function deleteAll() {
    listTodo = [];
    renderTodoList();
}