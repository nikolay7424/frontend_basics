const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listeners
loadEventListeners();

function loadEventListeners() {
  //add task event
  form.addEventListener('submit', addTask);

}

function addTask(e) {
  if (taskInput.value === '') {
    alert('add a task');
  }

  //create li element
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));

  //create link
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';

  //add icon
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  //append
  taskList.appendChild(li);

  taskInput.value = '';

  e.preventDefault();

}