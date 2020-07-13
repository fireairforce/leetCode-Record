Object.prototype.a = 'Object';
Function.prototype.a = 'Function';
function Person(){};        
var child = new Person();

console.log(Person.a);
console.log(child.a);
console.log(child.__proto__.__proto__.constructor.constructor.constructor); 
console.log(child.__proto__.__proto__.constructor);