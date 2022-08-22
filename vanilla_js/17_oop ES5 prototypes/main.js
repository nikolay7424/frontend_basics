const nick = {
  name: "Nick",
  age: 27
}

// console.log(nick);

// person constructor

function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  console.log(this);
}

// const nick2 = new Person('nick', '9-10-1981');
// const john = new Person('john', '11/11/1984');

// console.log(nick2.calculateAge());

// String
const name1 = 'Jeff';
const name2 = new String('Jeff');
name2.foo = 'bar';

// console.log(name2);
// console.log(typeof name2);

// if(name2 === 'Jeff') { // == yes | === no
//   console.log('yes');
// } else {
//   console.log('no');
// }

// number
const num1 = 5;
const num2 = new Number(5);

// console.log(typeof num2);

// bool
const bool1 = true;
const bool2 = new Boolean(true);

// console.log(typeof bool2);
// console.log(bool2);

// functions
const getSum1 = function(x, y) {
  return x + y;
}

const getSum2 = new Function('x', 'y', 'return x + y');

// console.log(getSum2(2, 1));

// objects
const john = {name: 'john'};
const john2 = new Object({name: 'john2'});

// console.log(john2);

// arrays

const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);
// console.log(typeof arr2);

// regexp
const re1 = /\w+/;
const re2 = new RegExp('\\w+'); // have to do escaping this way

// console.log(re2);

function Person2(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// calculate age
Person2.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// get full name
Person2.prototype.getFullName = function() {
  return this.firstName + ' ' +  this.lastName;
}

// gets married
Person2.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
}

const john3 = new Person2('John', 'Smith', '8-12-90');
const mary = new Person2('Mary', 'Doe', 'March 20 1978');

// console.log(mary);
// console.log(john3.calculateAge());
// console.log(john3.getFullName());

mary.getsMarried('Smith');
// console.log(mary.lastName);
// console.log(mary.hasOwnProperty('getFullName'));


// user constructor
function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

User.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
}

user1 = new User('John', 'Doe');
// console.log(user1.greeting());

// customer constructor
function Customer(firstName, lastName, phoneNumber, membership) {
  User.call(this, firstName, lastName);
  this.phoneNumber = phoneNumber;
  this.membership = membership;
}

// inherit the person prototype methods
Customer.prototype = Object.create(User.prototype);

// make customer prototype return Customer()
Customer.prototype.constructor = Customer;

customer1 = new Customer('John', 'Smith', '9379992', 'pro');

// console.log(customer1);

Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}. Welcolme to our company`;
}

// console.log(customer1.greeting());

const personPrototypes = {
  greeting: function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName){
    this.lastName = newLastName;
  }
}

const jessica = Object.create(personPrototypes);
jessica.firstName = 'Jessica';
jessica.lastName = 'Williams';
jessica.age = 30;

jessica.getsMarried('Thompson');
// console.log(jessica.greeting());

const brad = Object.create(personPrototypes, {
  firstName: {value: 'Brad'},
  lastName: {value: 'Traversy'},
  age: {value: 36}
});

console.log(brad.greeting());
console.log(brad);
