const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listeners
loadEventListeners();

function loadEventListeners() {
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);

  //add task event
  form.addEventListener('submit', addTask);

  //remove task event
  taskList.addEventListener('click', removeTask);

  //clear tasks event
  clearBtn.addEventListener('click', clearTasks);

  // filter task events
  filter.addEventListener('keyup', filterTasks);
}

// get tasks from ls
function getTasks() {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task) {
    //create li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));

    //create link
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';

    //add icon
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);

    //append
    taskList.appendChild(li);
  })
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

  // store in local storage
  storeTaskInLocalStorage(taskInput.value);

  // clear input
  taskInput.value = '';

  e.preventDefault();
}

function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('are you sure?')){
      e.target.parentElement.parentElement.remove();
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
  e.preventDefault();
}

function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.every(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
      return false;
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks() {
  // slower
  // taskList.innerHTML = '';

  // faster
  if(confirm('are you sure?')){
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }

  //clear from ls
  clearTasksFromLocalStorage();
}

  //clear from ls
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

function filterTasks (e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    let item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}



