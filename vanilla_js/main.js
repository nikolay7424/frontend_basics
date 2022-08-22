let red = '#d87b7b';
let green = '#34965b';

// book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// ui constructor
function UI() {}

UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');
  // create element
  const row = document.createElement('tr');
  // insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">❌</a></td>
  `;
  list.appendChild(row);
  return row;
}

// delete book
UI.prototype.deleteBook = function (target) {
  if(target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}

// clear inputs
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// inputs validation
UI.prototype.validate = function(title, author, isbn) {
  let elementsArr = [title, author, isbn];
  ui = new UI();
  let returnValue = false;

  // empty
  elementsArr.forEach(function(element){
    if (element.value === '') {
      ui.displayErrorMessage(red, 'Please fill the form', element);
      returnValue = false;
    } else {
      if(element.value.length < 4) {
        ui.displayErrorMessage(red, 'At least 4 characters', element);
        returnValue = false;
      } else {
        ui.displayErrorMessage(green, 'Correct', element);
        returnValue = true;
      }
    }
  });

  // isbn 10 or 13 digits
  if(isbn.value.length != 10 && isbn.value.length != 13) {
    ui.displayErrorMessage(red, 'Must be 10 or 13 digits', isbn);
    returnValue = false;
  } else {
    ui.displayErrorMessage(green, 'Correct', isbn);
    returnValue = true;
  }

  return returnValue;
}

UI.prototype.displayErrorMessage = function(color, message, element) {
  element.nextElementSibling.style.visibility = 'visible';
  element.nextElementSibling.style.color = color;
  element.style.borderColor = color;
  element.nextElementSibling.textContent = message;
}

UI.prototype.hideErrorMessage = function(element) {
  element.nextElementSibling.style.visibility = 'hidden';
  element.style.borderColor = 'initial';
  element.nextElementSibling.textContent = 'e';
}

UI.prototype.glow = function(element, color) {
  element.style.background = color;
  element.style.color = 'white';
  setTimeout(function() {
    element.style.transition = 'all 0.3s ease-out';
    element.style.background = 'white';
    element.style.color = 'black';
  }, 200);
}

// event listeners

// submit
document.getElementById('book-form').addEventListener('submit', function(e){
  // get form values
  const title = document.getElementById('title'),
        author = document.getElementById('author'),
        isbn = document.getElementById('isbn');
 
  const ui = new UI();
  const store = new Store();
  if(ui.validate(title, author, isbn)) {
    const book = new Book(title.value, author.value, isbn.value);
    const row = ui.addBookToList(book);
    ui.glow(row, green);
    ui.clearFields();
    ui.hideErrorMessage(title);
    ui.hideErrorMessage(author);
    ui.hideErrorMessage(isbn);
    store.addBook(book);
  }

  e.preventDefault();
});

// keyp
document.getElementById('book-form').addEventListener('keyup', function(e){
  // get form values
  const title = document.getElementById('title'),
        author = document.getElementById('author'),
        isbn = document.getElementById('isbn');
 
  const ui = new UI();
  ui.validate(title, author, isbn);
    
  e.preventDefault();
});

// delete
document.getElementById('book-list').addEventListener('click', function(e) {
  const ui = new UI();
  ui.glow(e.target.parentElement.parentElement, red)
  setTimeout(function() {
    ui.deleteBook(e.target);
  }, 300);

  // remove from LS
  const store = new Store();
  store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  e.preventDefault();
});

// LS
Store.prototype.getBooks = function() {
  let books;
  if(localStorage.getItem('books') === null){
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }
  return books;
}

Store.prototype.displayBooks = function() {
  const books = this.getBooks();
  const ui = new UI();
  books.forEach(function(book) {
    ui.addBookToList(book);
  });
}

Store.prototype.addBook = function(book) {
  const books = this.getBooks();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
}

Store.prototype.removeBook = function(isbn) {
  const books = this.getBooks();
  books.forEach(function(book, index) {
    if(book.isbn === isbn) {
      books.splice(index, 1);
      return false;
    }
  });
  localStorage.setItem('books', JSON.stringify(books));
}

// store constructor
function Store() {}
const store = new Store();
store.displayBooks();