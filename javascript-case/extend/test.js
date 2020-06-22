Object.prototype.a = "Object";
Function.prototype.a = "Function";
function Person() {}
var child = new Person();

console.log(Person.a);
// Function
console.log(child.a);
// Object
console.log(child.__proto__);
// Preson{}
console.log(child.__proto__.__proto__);
// {a:'Object'}
console.log(child.__proto__.__proto__.constructor);
// [Function: Object]
console.log(child.__proto__.__proto__.constructor.constructor);
// [Function: Function]
console.log(child.__proto__.__proto__.constructor.constructor.constructor);
// [Function: Function]

function currying(fn, ...arg) {
  if (arg.length >= fn.length) {
    return fn(...arg);
  } else {
    return (...arg1) => currying(fn, ...arg, ...arg1);
  }
}
