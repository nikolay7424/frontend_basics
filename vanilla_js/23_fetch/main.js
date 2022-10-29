document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getAPI);

function getText() {
  fetch('test.txt')
  .then(function(res){
    return res.text();
  }).then(function(data){
    document.querySelector('.output').innerHTML = data;
  })
  .catch(function(err){
    document.querySelector('.output').innerHTML = err;
  });
}

function getJSON() {
  fetch('post.json')
  .then(function(res){
    return res.json();
  }).then(function(data){
    let output = '';
    data.forEach(function(post) {
      output += `<li>title: ${post.title} | body: ${post.body}</li>`;
    });
    document.querySelector('.output').innerHTML = output;
    // console.log(data);
  })
  .catch(function(err){
    document.querySelector('.output').innerHTML = err;
  });
}

function getAPI() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function(res){
    return res.json();
  }).then(function(data){
    let output = '';
    data.forEach(function(post) {
      output += `<li>title: ${post.title} <br> body: ${post.body}</li>`;
    });
    document.querySelector('.output').innerHTML = output;
    // console.log(data);
  })
  .catch(function(err){
    document.querySelector('.output').innerHTML = err;
  });
}