//getElementsByClassName
const items = document.getElementsByClassName('collection-item');

console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'task1';

//only under ul
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

//getElementsByTagName
const lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[1]);
lis[2].style.color = 'blue';
lis[0].textContent = 'task2';
//console.log(lis.reverse()); //error, lis is HTML collection, not an array
//will work with for loop tho
const lisArr = Array.from(lis);
console.log(lisArr.reverse());
lisArr.forEach(function(li, index){
  console.log(li);
  li.textContent = `task number: ${index}`;
});

//querySelectorAll
const items2 = document.querySelectorAll('ul.collection li.collection-item');
/*
items2 - is nodelist
thats why you don't need to conver it to an array
*/
items2.forEach(function(item, index){
  item.textContent = `item number: ${index}`;
});
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');
liOdd.forEach(function(item){
  item.style.background = '#ccc';
});
liEven.forEach(function(item){
  item.style.background = 'pink';
});

console.log(liOdd);