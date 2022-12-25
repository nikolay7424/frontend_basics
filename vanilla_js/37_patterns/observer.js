function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
    console.log(`you are now subscribed ${fn.name}`);
  }, 
  unsubscribe: function(fn){
    /*
    filter out from the list whatever matches the callback
    if there is no match, the callback gets to stay on the list
    the filter returns a new list
    ot reassigns the list of observers
    */ 
    this.observers = this.observers.filter(function(item) {
      if(item !== fn) {
        return item;
      }
    });
    console.log(`you are now unsubscribed from ${fn.name}`);
  },
  fire: function() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
}

const click = new EventObserver();

//event listeners
document.querySelector('.sub-ms').addEventListener('click', function(){
  click.subscribe(getCurrMiliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function(){
  click.unsubscribe(getCurrMiliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function(){
  click.subscribe(getCurrSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function(){
  click.unsubscribe(getCurrSeconds);
});

document.querySelector('.fire').addEventListener('click', function(){
  click.fire();
});



const getCurrMiliseconds = function() {
  console.log(`Current miliseconds ${new Date().getMilliseconds()}`);
}

const getCurrSeconds = function() {
  console.log(`Current seconds ${new Date().getSeconds()}`);
}