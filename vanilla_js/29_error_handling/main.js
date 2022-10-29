const user = {email: "johndoe@gmail.com"};

try {
  // reference eror
  // myfunc();
  
  // type error
  // null.myfunc();

  // syntax error
  // eval('Hello World');

  // uri error
  // decodeURIComponent('%');

  if(!user.name) {
    // throw 'user has no name';
    throw new SyntaxError('user has no name');
  }

} catch(e) {
  console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
  // console.log(e instanceof TypeError);
} finally {
  // console.log('finally runs regardless of result');
}

// console.log('program continues')