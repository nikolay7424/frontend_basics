const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState);
  }

  this.change = function(state) {
    currentState = state;
  }
};

// home state
const homeState = function(page) {
  document.querySelector('#heading').textContent = 'home';
  document.querySelector('#content').innerHTML = `
    <div class="mt-4 p-5 bg-primary text-white rounded">
    <h1>Home</h1>
    <p>this is home state</p>
    </div>
`;
}


// about state
const aboutState = function(page) {
  document.querySelector('#heading').textContent = 'about us';
  document.querySelector('#content').innerHTML = `
    <div class="mt-4 p-5 bg-primary text-white rounded">
    <h1>About</h1>
    <p>this is about page</p>
    </div>
`;
}

// contact state
const contactState = function(page) {
  document.querySelector('#heading').textContent = 'contact us';
  document.querySelector('#content').innerHTML = `
    <div class="mt-4 p-5 bg-primary text-white rounded">
    <h1>Contact</h1>
    <p>this is contact page</p>
    <form>
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
`;
}


// instantiate page state

const page = new PageState();

// init first page
page.init();

// ui vars
const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

// events
home.addEventListener('click', (e) => {
  page.change(new homeState);

  e.preventDefault();
});

about.addEventListener('click', (e) => {
  page.change(new aboutState);

  e.preventDefault();
});

contact.addEventListener('click', (e) => {
  page.change(new contactState);

  e.preventDefault();
});

