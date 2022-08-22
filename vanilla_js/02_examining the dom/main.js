let val;

val = window.document;
val = window.document.all;
val = window.document.all[0];
val = window.document.all.length;
val = window.document.head;
val = window.document.body;
val = window.document.doctype;
val = window.document.domain;
val = window.document.URL;
val = window.document.characterSet;
val = window.document.contentType;
val = window.document.forms;
val = window.document.forms[0];
val = window.document.forms[0].id;
val = window.document.forms[0].method;
val = window.document.links;
val = window.document.links[0];
val = window.document.links[0].className;
val = window.document.links[0].classList;
val = window.document.links[0].classList[0];
val = window.document.images;
val = window.document.scripts;
val = window.document.scripts[2];
val = window.document.scripts[2].getAttribute('src');

let scripts = document.scripts;
let scriptsArr = Array.from(scripts);
scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);