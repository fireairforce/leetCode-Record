let arr = [];

// let arr = new Array();

console.log(arr.__proto__.constructor===Array);
console.log(Array.isArray(arr));
console.log(Object.prototype.toString.call(arr));