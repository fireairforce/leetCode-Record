console.log("script start");

setTimeout(function() {
  console.log("setTimeout");
}, 0);


new Promise(function(resolve) {
  console.log("promise1");
  resolve();
}).then(function() {
  console.log("promise2");
});

console.log("script end");
// script start -> async1 start -> async 2 -> promise1 -> script end -> pomise2 -> async1 end  -> setTimeout
