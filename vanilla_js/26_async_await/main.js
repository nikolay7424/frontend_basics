// async function myFunk() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('hello'), 1000)
//   });

//   const err = false;

//   if(!err){
//     const res = await promise;
//     return res;
//   } else {
//     await Promise.reject(new Error('something went wrong'));
//   }
// }

// myFunk()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = response.json();
  return data;
}

getUsers().then(res => console.log(res));