//create element
const li = document.createElement('li');

//add class
li.className = 'collection-item';

//add id
li.id = 'new-item';

//add attribute
li.setAttribute('title', 'New item')

//create tex node and append
li.appendChild(document.createTextNode('new item'));

//create new link element
const link = document.createElement('a');

//add classes
link.className = 'delete-item secondary-content';

//add icon
link.innerHTML = '<i class="fa fa-remove"></i>';

//append link to li
li.appendChild(link);

//append li as child to ul
document.querySelector('ul.collection').appendChild(li);


console.log(link);