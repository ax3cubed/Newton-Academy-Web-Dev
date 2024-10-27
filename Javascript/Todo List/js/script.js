const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const todoList = document.getElementById('todoList');

function createTask(taskText) {
    
    const taskItem = document.createElement('li');
    taskItem.classList.add('todo-item');
    taskItem.setAttribute('dragabble', true)

    const taskContent = document.createElement('span');
    taskContent.textContent =taskText;
    taskItem.appendChild(taskContent);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete'
    taskItem.appendChild(deleteButton);
}

addTaskBtn.addEventListener('click', function(){
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        createTask(taskText);
    }
    else {
        alert("Please enter a task")
    }
})