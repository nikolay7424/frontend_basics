const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//click
clearBtn.addEventListener('click', runEvent);
//doubleclick
clearBtn.addEventListener('dblclick', runEvent);
//mousedown
clearBtn.addEventListener('mousedown', runEvent);
//mouseup
clearBtn.addEventListener('mouseup', runEvent);
//mouse enter - works on entire element
card.addEventListener('mouseenter', runEvent);
//mouse leave - works on entire element
card.addEventListener('mouseleave', runEvent);
//mouse over - works everytime when mouse is interacting with elements inside target element
card.addEventListener('mouseover', runEvent);
//mouse out - works everytime when mouse is interacting with elements inside target element
card.addEventListener('mouseout', runEvent);
//mouse move
card.addEventListener('mousemove', runEvent);





//event handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `mouseX: ${e.offsetX} mouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}