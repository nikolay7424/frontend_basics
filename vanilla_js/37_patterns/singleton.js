const singleton = (function() {
  let instanse;

  function createInstance() {
    const object = new Object('object instance');
    return object;
  }

  return {
    getInstance: function() {
      if(!instanse) {
        instanse = createInstance();
      }
      return instanse;
    }
  }
})();

const instance1 = singleton.getInstance();
const instance2 = singleton.getInstance();

// console.log(instance1);

console.log(instance1 === instance2);