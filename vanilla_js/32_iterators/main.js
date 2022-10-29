//iterator example
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < names.length ? 
      { value: names[nextIndex++], done: false} : 
      {done: true};
    }
  }
}

const namesArr = ['Jack', 'Jill', 'John'];

const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);


// generator example
function* sayNames() {
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

const nameGenerator = sayNames();

// console.log(nameGenerator.next().value);
// console.log(nameGenerator.next().value);
// console.log(nameGenerator.next().value);
// console.log(nameGenerator.next().done);

function* createIDs() {
  let index = 0;

  while(true) {
    yield index++;
  }
}

const gen = createIDs();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);