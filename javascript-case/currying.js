function curry(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  } else {
    return (...args2) => curry(fn, ...args, ...args2);
  }
}
const add = (a, b, c) => {
  return a + b + c;
};

const add1 = curry(add);
console.log(add1(1, 2)(3));
console.log(add1(1)(2)(3));