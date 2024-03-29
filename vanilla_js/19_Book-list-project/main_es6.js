class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

}

class UI {
  static red = '#EB5757';
  static green = '#34965b';
  static titleValidation = false;
  static authorValidation = false;
  static ISBNValidation = false;
  static sortBool = false;


  static addBookToList(book) {
    const list = document.getElementById('book-list');
    // create element
    const row = document.createElement('tr');
    row.className = 'book-row';
    // insert cols
    row.innerHTML = `
      <td class="pl">${book.title}</td>
      <td class="pl">${book.author}</td>
      <td class="pl">${book.isbn}</td>
      <td><a href="#" class="delete"><img class="delete-icon" src="delete.svg"></a></td>
    `;
    list.appendChild(row);
    return row;
  }

  static deleteBook(target) {
    if(target.className === 'delete') {
      UI.glow(target.parentElement.parentElement, UI.red);
      setTimeout(function() {
        target.parentElement.parentElement.remove();
      }, 300);
    }
  }

  static clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  static clearTableFields() {
    document.getElementById('table-search-title').value = '';
    document.getElementById('table-search-author').value = '';
    document.getElementById('table-search-isbn').value = '';
  }

  static validateTextInput(element) {
    let returnValue = false;
    if (element.value === '') {
      UI.displayErrorMessage(UI.red, 'Please fill the form', element);
      returnValue = false;
    } else {
      if(element.value.length < 4) {
        UI.displayErrorMessage(UI.red, 'At least 4 characters', element);
        returnValue = false;
      } else {
        UI.displayErrorMessage(UI.green, 'Correct', element);
        returnValue = true;
      }
    }
    return returnValue;
  }

  static validateISBNInput(element) {
    let returnValue = false;
    if (element.value === '') {
      UI.displayErrorMessage(UI.red, 'Please fill the form', element);
      returnValue = false;
    } else {
      if(element.value.length != 10 && element.value.length != 13) {
        UI.displayErrorMessage(UI.red, 'Must be 10 or 13 digits', element);
        returnValue = false;
      } else {
        UI.displayErrorMessage(UI.green, 'Correct', element);
        returnValue = true;
      }
    }
    return returnValue;
  }

  static validateISBN(element) {
    if(Store.searchBook(element.value)) {
      UI.displayErrorMessage(UI.red, 'this ISBN is already taken', element);
    } else {
      return true;
    }
  }

  static displayErrorMessage(color, message, element) {
    element.nextElementSibling.style.visibility = 'visible';
    element.nextElementSibling.style.color = color;
    element.style.borderColor = color;
    element.nextElementSibling.textContent = message;
  }

  static hideErrorMessage(element) {
    element.nextElementSibling.style.visibility = 'hidden';
    element.style.borderColor = '#d0d0d0';
    element.nextElementSibling.textContent = 'e';
  }

  static glow(element, color) {
    element.style.background = color;
    element.style.color = 'white';
    setTimeout(function() {
      element.style.transition = 'all 0.3s ease-out';
      element.style.background = 'white';
      element.style.color = 'black';
    }, 200);
  }

  static inputGlow(element) {
    element.style.transition = 'all 0.3s ease-out';
    element.style.outline = `thick solid ${UI.red}`;
    setTimeout(function() {
      element.style.outline = 'none';
    }, 220);
  }
}

class Store {
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null){
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();
    books.forEach(function(book) {
      UI.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach(function(book, index) {
      if(book.isbn === isbn) {
        books.splice(index, 1);
        return false;
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }

  static clearBooks() {
    document.querySelectorAll('.book-row').forEach(function(row){
      row.remove();
    });
  }

  static searchBook(isbn) {
    const books = Store.getBooks();
    for(let i = 0; i < books.length; i++) {
      if(books[i].isbn === isbn) {
        return true;
      }
    }
  }
}

// event listeners
function loadAllEventListeners() {
  // submit
  document.getElementById('book-form').addEventListener('submit', function(e){
    // get form values
    const title = document.getElementById('title'),
          author = document.getElementById('author'),
          isbn = document.getElementById('isbn');
    
    if(UI.validateTextInput(title)) {
      UI.titleValidation = true;
    } else {
      UI.inputGlow(title);
      UI.titleValidation = false;
    }

    if(UI.validateTextInput(author)) {
      UI.authorValidation = true;
    } else {
      UI.inputGlow(author);
      UI.authorValidation = false;
    }

    if(UI.validateISBNInput(isbn)) {
      if(UI.validateISBN(isbn)) {
        UI.ISBNValidation = true;
      } else {
        UI.inputGlow(isbn);
        UI.ISBNValidation = false;
      }
    } else {
      UI.inputGlow(isbn);
      UI.ISBNValidation = false;
    }

    if(UI.titleValidation && UI.authorValidation && UI.ISBNValidation) {
      const book = new Book(title.value, author.value, isbn.value);
      const row = UI.addBookToList(book);
      UI.glow(row, UI.green);
      UI.clearFields();
      UI.hideErrorMessage(title);
      UI.hideErrorMessage(author);
      UI.hideErrorMessage(isbn);
      Store.addBook(book);
    }

    e.preventDefault();
  });

  // keyp
  // title
  document.getElementById('title').addEventListener('keyup', function(e){
    const title = document.getElementById('title');
    if(!UI.validateTextInput(title)) {
      UI.titleValidation = false;
    }
    e.preventDefault();
  });

  // author
  document.getElementById('author').addEventListener('keyup', function(e){
    const author = document.getElementById('author');
    if(!UI.validateTextInput(author)) {
      UI.authorValidation = false;
    }
    e.preventDefault();
  });

  // isbn
  document.getElementById('isbn').addEventListener('keyup', function(e){
    const isbn = document.getElementById('isbn');
    if(!UI.validateISBNInput(isbn)) {
      UI.ISBNValidation = false;
    }
    e.preventDefault();
  });


  // delete
  document.getElementById('book-list').addEventListener('click', function(e) {
    UI.deleteBook(e.target.parentElement);
    // remove from LS
    Store.removeBook(e.target.parentElement.parentElement.previousElementSibling.textContent);
    e.preventDefault();
  });

  // filter keyup
  document.getElementById('search').addEventListener('keyup', function(e){
    const searchString = e.target.value.toLowerCase();
    const books = document.querySelectorAll('.book-row');

    books.forEach(function(book) {
      bookNodes = book.childNodes;
      const title = bookNodes.item(1).textContent;
      const author = bookNodes.item(3).textContent;
      const isbn = bookNodes.item(5).textContent;
      if(title.toLowerCase().indexOf(searchString) != -1 || author.toLowerCase().indexOf(searchString) != -1 || isbn.toLowerCase().indexOf(searchString) != -1) {
        book.style.display = 'table-row';
      } else {
        book.style.display = 'none';
      }
    });
  });

  // sort click
  document.getElementById('sort-title').firstChild.addEventListener('click', sortRows);
  document.getElementById('sort-author').firstChild.addEventListener('click', sortRows);
  document.getElementById('sort-isbn').firstChild.addEventListener('click', sortRows);

  function sortRows(e) {
    const books = document.querySelectorAll('.book-row');
    let sortTarget = e.target.firstChild.wholeText.toLowerCase().trim();
    if(UI.sortBool) {
      sortTarget = sortTarget = "-" + sortTarget;
    }
    let booksArr = [];

    function dynamicSort(property) {
      var sortOrder = 1;
      if(property[0] === "-") {
          sortOrder = -1;
          property = property.substr(1);
      }
      return function (a,b) {
          /* next line works with strings and numbers, 
           * and you may want to customize it to your needs
           */
          var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
          return result * sortOrder;
      }
    }

    books.forEach(function(book, index) {
      bookNodes = book.childNodes;
      const title = bookNodes.item(1).textContent;
      const author = bookNodes.item(3).textContent;
      const isbn = bookNodes.item(5).textContent;
      const newBook = {
        title: `${title}`,
        author: `${author}`,
        isbn: `${isbn}`
      };
      booksArr[index] = newBook;
    });

    booksArr.sort(dynamicSort(sortTarget));

    Store.clearBooks();

    booksArr.forEach(function(book) {
      const newBook = {
        title: `${book.title}`,
        author: `${book.author}`,
        isbn: `${book.isbn}`
      };
      UI.addBookToList(newBook);
    });
    UI.sortBool = !UI.sortBool;
  }

  // DOM contetn loaded
  document.addEventListener('DOMContentLoaded', Store.displayBooks);
}

loadAllEventListeners();
