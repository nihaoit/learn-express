/* const p = new Promise(function(resolve, reject) {
  resolve(1);
}); */
// PROMISE构造函数生成一个promise对象，它的参数是一个函数，这个函数的参数是2个函数。
const p = new Promise((resolve, reject) => {
  // resolve(1);  // pending=>resolved,fullfilled
  reject(new Error('Rejected for some reason!')); // pending=>rejected
});

p.then(result => {
  console.log(result);
}).catch(err => {
  console.log('Error:', err.message);
});
