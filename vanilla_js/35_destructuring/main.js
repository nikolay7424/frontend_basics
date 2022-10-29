// destructuring assignment

let a, b;

// [a, b] = [100, 200];

// rest pattern
// [a, b, ...rest] = [100, 200, 300, 400, 500];
// [a, b, c, ...rest] = [100, 200, 300, 400, 500];

// ({a, b} = {a: 100, b: 200, c: 300, e: 400, d:500});

({a, b, ...rest} = {a: 100, b: 200, c: 300, e: 400, d:500});

// console.log(a, b, rest);

// array desctructuring 
// const people = ['John', 'Beth', 'Mike'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// parse array return from a function
function getPeople() {
  return ['John', 'Beth', 'Mike'];
}

let person1, person2, person3;

[person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);

// obj destructuring
const person = {
  name: 'john doe',
  age: 32,
  city: 'Miami',
  gender: 'male',
  sayHello: function() {
    console.log('hi');
  }
};

// old es5 way
// const name = person.name,
//       age = person.age,
//       city = person.city;

// new es6 way
const {name, age, city, sayHello} = person;

console.log(name, age, city);

sayHello()