// 实现一个call
Function.prototype.myCall = function(context) {
  // 处理边界
  if (typeof this !== "function") {
    throw new TypeError("not funciton");
  }
  let args = [];
  let len = arguments.length;
  // call传递进来的参数并不同于apply是一个数组,而是多个参数
  // 将这些参数从类数组里面取出来
  for (let i = 0; i < len; i++) {
    args.push(arguments[i]);
  }
  // 将这些参数传递给context里面注册好的fn属性(该属性为一个函数)
  context.fn(...args);
  // 得到函数执行的结果
  let result = context.fn(...args);
  // 将这个新增的属性在执行完成后移除
  delete context.fn;
  return result;
};

Function.prototype.Call2 = function(context = window, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("不是函数");
  }
  context = context || window;
  context.fn = this;
  let result = context.fn(...args);
  delete context.fn;
  return result;
};

Function.prototype.MyCall = function(context,...arg) {
  if(typeof this !== 'function') {
    throw new TypeError(`Not Function`)
  } 
  let context = context || window;
  let fn = new Symbol();
  context[fn] = this;
  let result = context[fn](...arg);
  delete context.fn;
  return result;
}
