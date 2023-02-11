let apiKey = '';

function readTextFile(file) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', file, false);

  xhr.onload = function() {
    if(this.status === 200) {
      apiKey = this.responseText;
    }
  }
  xhr.send();
}

readTextFile('key.env');

let myHeaders = new Headers();
myHeaders.append("apikey", apiKey);

let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};


let symbols = fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
  .then(response => response.text())
  .then(result => result['symbols'])
  .catch(error => console.log('error', error));

console.log(symbols);