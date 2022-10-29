// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(typeof sym2);

// console.log(Symbol() === Symbol());

// console.log(`Hello ${String(sym1)}`);

const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};
myObj[KEY1] = 'prop1';
myObj[KEY2] = 'prop2';
myObj.key3 = 'prop3';
myObj.key4 = 'prop4';

// console.log(myObj[KEY1]);

// symbols are not enumerable

for(let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

// symbols are ignored by json.stringify 

console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));