// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const todoList = document.getElementById('todoList');

// For Drag and Drop
let draggedItem = null;

 
function createTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('todo-item');
    taskItem.setAttribute('draggable', true);

 
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskItem.appendChild(taskContent);

 
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    taskItem.appendChild(deleteBtn);

 
    taskContent.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

 
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(taskItem);
    });

    // Drag and Drop functionality
    taskItem.addEventListener('dragstart', function() {
        draggedItem = taskItem;
        setTimeout(() => {
            taskItem.style.display = 'none';
        }, 0);
    });

    taskItem.addEventListener('dragend', function() {
        setTimeout(() => {
            taskItem.style.display = 'flex';
            draggedItem = null;
        }, 0);
    });

    taskItem.addEventListener('dragover', function(e) {
        e.preventDefault();
    });

    taskItem.addEventListener('dragenter', function(e) {
        e.preventDefault();
        this.style.transform = 'scale(1.05)';
    });

    taskItem.addEventListener('dragleave', function() {
        this.style.transform = 'scale(1)';
    });

    taskItem.addEventListener('drop', function() {
        this.style.transform = 'scale(1)';
        if (this !== draggedItem) {
            todoList.insertBefore(draggedItem, this);
        }
    });

    
    todoList.appendChild(taskItem);
}
 
addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        createTask(taskText);
        taskInput.value ='';
    } else {
        alert('Please enter a task.');
    }
});

 
 
