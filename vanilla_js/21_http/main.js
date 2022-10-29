const http = new easyHTTP();

// get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, response) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });


// Create data
// const data = {
//   title: 'custom post',
//   body: 'this is a custom post'
// };

// // create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });


// update data
// const data = {
//   title: 'custom post',
//   body: 'this is a custom post'
// };

// update post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });


// delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  if(err) {
    console.log(err);
  } else {
    console.log(response);
  }
});

