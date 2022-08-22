let val;
//document.getElementById()

val = document.getElementById('task-title');

//val = val.id;
//val = val.classList;

val.style.background = '#333';
val.style.color = '#fff';
val.style.padding = '10px 20px';
val.textContent = 'Task List';
val.innerText = 'My task List';
val.innerHTML= '<span style="color:red;">Red task list</span>';

let val2 = document.querySelector('#task-title');
val2 = document.querySelector('.card-title');
val2 = document.querySelector('h5');
val2 = document.querySelector('li');
val2 = document.querySelector('ul li:nth-child(3)');

val2.style.color = 'red';


console.log(val2);


