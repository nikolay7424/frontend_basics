const inputs = document.querySelectorAll('input');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordRepeat = document.getElementById('password-repeat');
const submit = document.getElementById('submit');

// keep label moved up if input is not empty
inputs.forEach(input => {
  input.addEventListener('focusout', () => {
    if(input.value === '') {
      input.nextElementSibling.classList.remove('not-empty');
    } else {
      input.nextElementSibling.classList.add('not-empty');
    }
  });
});

username.addEventListener('keyup', validateUsername);
email.addEventListener('keyup', validateEmail);
password.addEventListener('keyup', validatePassword);
passwordRepeat.addEventListener('keyup', validatePasswordRepeat);
passwordRepeat.addEventListener('paste', e => e.preventDefault());

submit.addEventListener('click', validateSubmit);

// validators
function validateSubmit(e) {
  if(!validateUsername()) {
    highlightErrorField(username);
  }
  if(!validateEmail()) {
    highlightErrorField(email);
  }
  if(!validatePassword()) {
    highlightErrorField(password);
    e.preventDefault();
    return false
  } else {
    if(!validatePasswordRepeat()) {
      highlightErrorField(passwordRepeat);
    }
  }
  e.preventDefault();
}

function validateUsername () {
  if(username.value === '') {
    errorMessage(username, true, 'the field is empty');
    return false;
  } else {
    if (stringCheck(username.value)) {
      errorMessage(username, true, 'you cannot use space or symbols in username');
      return false;
    } else {
      if(username.value.length < 3 || username.value.length > 12) {
        errorMessage(username, true, 'username must be between 3 and 12 characters');
        return false;
      } else {
        errorMessage(username, false, ' ');
        return true;
      }
    }
  }
}

function validateEmail () {
  if(email.value === '') {
    errorMessage(email, true, 'the field is empty');
    return false;
  } else {
    if (!emailCheck(email.value)) {
      errorMessage(email, true, 'email is not correct');
      return false;
    } else {
      errorMessage(email, false, ' ');
      return true;
    }
  }
}

function validatePassword () {
  if(password.value === '') {
    keepPasswordRepeatDisabled();
    errorMessage(password, true, 'the field is empty');
    return false;
  } else {
    if (!passwordCheck(password.value)) {
      keepPasswordRepeatDisabled();
      errorMessage(password, true, 'password should have uppercase and lowercase \n letters, numbers and symbols');
      return false;
    } else {
      if(password.value.length < 8) {
        keepPasswordRepeatDisabled();
        errorMessage(password, true, 'password must be at least 8 characters');
        return false;
      } else {
        passwordRepeat.disabled = false;
        errorMessage(password, false, ' ');
        return true;
      }
    }
  }
}

function validatePasswordRepeat () {
  if(password.value === '') {
    errorMessage(passwordRepeat, true, 'this field is empty');
    return false;
  } else {
    if(passwordRepeat.value !== password.value) {
      errorMessage(passwordRepeat, true, 'passwords do not match');
      return false;
    } else {
      if(!validatePassword()) {
        errorMessage(passwordRepeat, true, ' ');
        return false;
      } else {
        errorMessage(passwordRepeat, false, ' ');
        return true;
      }
    }
  }
}

// helper functions

// error message handling
function errorMessage(element, bool, message) {
  let color;
  let remove;
  bool ? color = 'red' : color = 'green';
  bool ? remove = 'green' : remove = 'red';
  element.nextElementSibling.nextElementSibling.innerText = message;

  element.classList.remove(`${remove}`);
  element.nextElementSibling.nextElementSibling.classList.remove(`${remove}-span`)
  element.classList.add(`${color}`);
  element.nextElementSibling.nextElementSibling.classList.add(`${color}-span`);
}

// check if string has spaces or symbols
function stringCheck(string) {
  const regexp = /[\s\W]/;
  if(regexp.test(string)) {
    return true;
  } else {
    return false;
  }
}

// check if password is strong
function passwordCheck(password) {
  const regexp = /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/;
  if(regexp.test(password)) {
    return true;
  } else {
    return false;
  }
}

// email validation
function emailCheck(email) {
  return String(email)
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

// highlight fields that are still not valid upon sumbit
function highlightErrorField(element) {
  element.classList.add('highlight-error');
  setTimeout(() => {
    element.classList.add('highlight-back');
  }, 300);
  setTimeout(() => {
    element.classList.remove('highlight-back');
    element.classList.remove('highlight-error');
  }, 400);
}

// keep password repeat disabled
function keepPasswordRepeatDisabled() {
  passwordRepeat.disabled = true;
  passwordRepeat.nextElementSibling.nextElementSibling.innerText = 'field is disabled until password is valid';
  passwordRepeat.nextElementSibling.nextElementSibling.style.color = 'black';
}