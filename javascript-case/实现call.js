// 实现一个call
Function.prototype.myCall = function(context) {
  if (typeof this !== "function") {
    throw new TypeError("not funciton");
  }
  let args = [];
  let len = arguments.length;
  for (let i = 0; i < len; i++) {
    args.push(arguments[i]);
  }
  context.fn(...args);
  let result = context.fn(...args);
  delete context.fn;
  return result;
};
