function currying(fn, length) {
  length = length || fn.length;
  return function(...args) {
    return args.length >= length
      ? fn.apply(this, args)
      : currying(fn.bind(this, ...args), length - args.length);
  };
}

const add = (a,b,c) => {
    return a + b +c;
}

const add1 = currying(add);
console.log(add1(1,2)(3));
console.log(add1(1)(2)(3));