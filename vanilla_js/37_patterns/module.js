// basic structure
(function () {
  // declare private vars and functions
  return {
    // declare public vars and functions
  }
})();

// standart module pattern
const UICtrl = (function() {
  let text = 'Hello World';
  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  }
  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  }
})();


// UICtrl.callChangeText();


//revealing module pattern
const itemConrtoller = (function(){
  let data = [];
   function add(item) {
    data.push(item);
    console.log('item added');
   }
  
  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  }
})();

itemConrtoller.add({id: 1, name: 'john'});
console.log(itemConrtoller.get(1));