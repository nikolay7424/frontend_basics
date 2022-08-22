// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('test');
//   // e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  // console.log('test');
  let val;
  val = e;
  //event target
  val = e.target;
  val = e.target.className;
  val = e.target.classList;
  e.target.innerText = 'test';

  val = e.type;
  val = e.timeStamp;
  //coordinates relative to the window
  val = e.clientY;
  val = e.clientX;
  
  //coordinates relative to the element
  val = e.offsetY;
  val = e.offsetX;
  
  console.log(val);
}