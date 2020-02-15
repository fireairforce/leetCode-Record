Function.prototype.mybind = function(context) {
  if (typeof this !== "function") {
    // 如果当前执行环境不是函数就抛出错误
    throw new TypeError("Error");
  }
  let _this = this;
  let arg = [...arguments].slice(1);
  return function F() {
    // 如果函数使用new的情况
    if (this instanceof F) {
      return new _this(...arg, ...arguments);
    } else {
      return _this.apply(context, arg.concat(...arguments));
    }
  };
};
