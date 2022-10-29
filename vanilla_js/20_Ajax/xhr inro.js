document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // create an XHR obj
  const xhr = new XMLHttpRequest();

  // open
  xhr.open('GET', 'data.txt', true);
  // console.log(xhr.readyState);

  // optional, used for spinners/loaders
  xhr.onprogress = function() {
    console.log(xhr.readyState);
  }

  xhr.onload = function () {
    console.log(xhr.readyState);
    if(this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  // xhr.onreadystatechange = function () {
  //   console.log(xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function() {
    console.log('request error...');
  }

  xhr.send();
  // readyState Values
  // 0: request not initialized 
  // 1: server connection established
  // 2: request received 
  // 3: processing request 
  // 4: request finished and response is ready
}