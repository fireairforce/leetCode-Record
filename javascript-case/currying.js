// function curry(fn, ...args) {
//   if (args.length >= fn.length) {
//     return fn(...args);
//   } else {
//     return (...args2) => curry(fn, ...args, ...args2);
//   }
// }
// const add = (a, b, c) => {
//   return a + b + c;
// };

// function sum(...args) {
//   let res = 0;
//   for (let i = 0; i < args.length; i++) {
//     res += args[i];
//   }
//   return res;
// }


// const add1 = curry(sum);
// console.log(add1(1, 2, 3, 4, 5));
// console.log(add1(1)(2)(3)(4)(5));


const curry = (fn, ...arg) => {
  if (fn.length <= arg.length) {
    fn(...arg)
  } else {
    (...arg2) => curry(fn, ...arg, ...arg2)
  }
}

console.log(Number.MAX_VALUE);