// set local storage item
localStorage.setItem('name', 'john');
localStorage.setItem('age', '30');
sessionStorage.setItem('name', 'john');

//remove
localStorage.removeItem('name');

localStorage.setItem('name', 'john');
const name1 = localStorage.getItem('name');
const age = localStorage.getItem('age');

//clear
//localStorage.clear();

//console.log(age);

document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();

  const task = document.getElementById('task').value;

  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);


  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('task saved');
})

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task) {
  console.log(task);
});