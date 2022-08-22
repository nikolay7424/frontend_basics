const alertSusccess = document.querySelector('.alert-success');
const alertDanger = document.querySelector('.alert-danger');
alertDanger.style.margin = '-4.6rem 0 1rem 0';


function showMessage(message, type) {
  if(type === 'success') {
    alertSusccess.style.visibility = 'visible';
    alertSusccess.innerHTML = `<p> ${message} </p>`;
    setTimeout(() => {
      alertSusccess.style.visibility = 'hidden';
    }, 800);
  } else {
    alertDanger.innerHTML = `<p> ${message} </p>`;
    alertDanger.style.visibility = 'visible';
    setTimeout(() => {
      alertDanger.style.visibility = 'hidden';
    }, 800);
  }
}

function clearForm() {
  document.querySelector('#number').value = '';
}

number = Math.floor(Math.random() * 10) + 1;
let attempts = 3;
document.querySelector('#try').addEventListener('click', game);

console.log(number);

function game(e) {
  const userInput = document.querySelector('#number').value;
  if(attempts != 0) {
    if(userInput == number) {
      showMessage('You won', 'success');
      clearForm();
      document.querySelector('#restart').style.visibility = 'visible';
      document.querySelector('#try').style.visibility = 'hidden';
    } else {
      clearForm();
      attempts -= 1;
      if(attempts == 0) {
        showMessage(`You lost`, 'fail');
        document.querySelector('#restart').style.visibility = 'visible';
        document.querySelector('#try').style.visibility = 'hidden';
      } else {
        showMessage(`Wrong, you can try ${attempts} more times`, 'fail');
      }
    }
  } else {
    showMessage(`You lost`, 'fail');
    document.querySelector('#restart').style.visibility = 'visible';
    document.querySelector('#try').style.visibility = 'hidden';
  }
  e.preventDefault();
} 