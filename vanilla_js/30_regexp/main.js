let re;

re = /hello/i;
// i - case insensitive
// g - global search

// console.log(re);
// console.log(re.source);

//  exec() will return result in array or null

// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() true or false
// const result = re.test('Hello');
// console.log(result);

// search() return index of first match or - 1
// const str = 'Hello there';
// const result = str.search(re);
// console.log(result);

// replace() return new string with some or all matches of pattern
// const str = 'Hello there';
// const result = str.replace(re, 'hi');
// console.log(result);

// regexp
re = /hello/;
re = /hello/i;

// metacharactes
re = /^h/i; //must start with
re = /d$/i; //must end with
re = /^hello$/i; //begin and end with
re = /h.llo/i; //any 1 char 
re = /h*llo/i; //any char 0 or more
re = /gre?a?y/i; //optional char
re = /gre?a?y\?/i; //escapechar

// [] brackets, charsets 
re = /gr[ea]y/i; //must be an "a" or "e"
re = /[^GF]ray/i; //anything except "G" or "F"
re = /[A-Z]ray/; //any uppercase letter
re = /[a-z]ray/; //any lowercase letter
re = /[A-Za-z]ray/; //any letter
re = /[0-9]ray/; //any digit

// braces {} quantifiers
re = /hel{2}o/i; //must be excactly 2 chars
re = /hel{2,4}o/i; //must be 2 to 4 chars
re = /hel{2,}o/i; //must be at least 2 chars

// parentheses () grouping
re = /([0-9]x){3}/i;

// shorthand character classes
re = /\w/; //word character any - alphabet, numeric and underscore 
re = /\w+/; //one or more word characters - any alphabet, numeric and underscore 
re = /\W/; //non-word characters 
re = /\d/; //digit characters 
re = /\D/; //non-digit characters 
re = /\s/; //whitespace characters 
re = /\S/; //non-whitespace characters 
re = /Hell\b/i; //word boundary 

// assertions
re = /x(?=y)/; //matches x only if followed by y
re = /x(?!y)/; //matches x only if not followed by y

// string to match
const str = "xguigu";

// log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches the ${re.source}`);
  } else {
    console.log(`${str} does not match the ${re.source}`);

  }
}

reTest(re, str);