// maps are key value pairs
// we can use any type as a key or a value

const map1 = new Map();

const key1 = 'some string',
      key2 = {},
      key3 = function() {};

map1.set(key1, 'value of key1');
map1.set(key2, 'value of key2');
map1.set(key3, 'value of key3');

// console.log(map1.get(key1), map1.get(key2), map1.get(key3));
// console.log(map1.size);

// iteraring through maps
// loop using for of to get keys and values

// for(let [key, value] of map1) {
//   console.log(`${key} : ${value}`);
// }

// iterate keys only
// for(let key of map1.keys()) {
//   console.log(key);
// }

// iterate values only
// for(let value of map1.values()) {
//   console.log(value);
// }

// loop with foreach
// map1.forEach(function(value, key) {
//   console.log(`${key} : ${value}`);
// });

// convert sets to arrays

const keyValArr = Array.from(map1);
// console.log(keyValArr);

const valArr = Array.from(map1.values());
// console.log(valArr);

const keyArr = Array.from(map1.keys());
// console.log(keyArr);

// sets - store unique values of any type

const set1 = new Set();

// add some values
set1.add(100);
set1.add('a');
set1.add({name: 'john'});
set1.add(true);
set1.add(100);

const set2 = new Set([1, true, 'string']);


console.log(set1.size);
console.log(set1.has(100));
console.log(set1.has(50 + 50));
console.log(set1.has({name: 'john'}));

