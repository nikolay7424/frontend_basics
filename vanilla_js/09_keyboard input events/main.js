const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
let heading = document.querySelector('h5');


form.addEventListener('submit', runEvent);
taskInput.addEventListener('keydown', runEvent2);
taskInput.addEventListener('keyup', runEvent3);
taskInput.addEventListener('keypress', runEvent3);
taskInput.addEventListener('focus', runEvent3);
taskInput.addEventListener('blur', runEvent3);
taskInput.addEventListener('cut', runEvent3);
taskInput.addEventListener('paste', runEvent3);
taskInput.addEventListener('input', runEvent3);

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  
  console.log(taskInput.value);
  taskInput.value = '';
  e.preventDefault();
}

function runEvent2(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  console.log(e.target.value);
  heading.innerText = e.target.value;
}

function runEvent3(e) {
  console.log(`EVENT TYPE: ${e.type}`);
}