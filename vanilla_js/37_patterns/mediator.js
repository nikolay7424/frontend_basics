const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },
  recieve: function(message, from) {
    console.log(`${from.name} to ${this.name} : ${message}`)
  }
}

const Chatroom = function() {
  let users = {}; //user list

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if(to) {
        // single user message
        to.recieve(message, from);
      } else {
        // mass mesage
        for(key in users) {
          if(users[key] !== from) {
            users[key].recieve(message, from);
          }
        }
      }
    }
  }
}

const brad = new User('brad');
const jeff = new User('jeff');
const sarah = new User('sarah');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sarah);

brad.send('hello Jeff', jeff);
sarah.send('hello brad', brad);
jeff.send('hello everyone');