let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;
//child nodes selects not only 'lis' but also text nodes(linebreacks in this case)
//nodelist
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;
val = list.childNodes[1].nodeType;
val = list.childNodes[3].nodeType;
/*
  node types:
  1 - Element
  2 - Attribute(deprecated)
  3 - Text Node
  8 - Comment
  9 - Document itself
  10 - Doctype
*/

//children(only 'lis')
//html collection
val = list.children;
list.children[0].textContent = 'children 0';
//children of children
val = list.children[1].children;

//returns first node for some reason
val = list.firstChild;
//returns first element
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

//count
val = list.childElementCount;

//get parent node
val = listItem.parentNode;
val = listItem.parentElement;//same in most cases
val = listItem.parentElement.parentElement;

//get next sibling
val = listItem.nextSibling;
//nextElementSibling
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.nextElementSibling;

//previous sibling
val = val.previousSibling;
//previousElementSibling
val = val.previousElementSibling;





console.log(val);