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

  //remove task event
  taskList.addEventListener('click', removeTask);

  //clear tasks event
  clearBtn.addEventListener('click', clearTasks);

  // filter task events
  filter.addEventListener('keyup', filterTasks);

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

function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('are you sure?')){
      e.target.parentElement.parentElement.remove();
    }
  }
  e.preventDefault();
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