Function.prototype.bind2 = function(context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("TypeError Wrong");
  }
  const _this = this;
  return function F(...args1) {
    if (this instanceof F) {
      return new _this(...args, ...args1);
    } else {
      return _this.apply(context, arg.concat(args1));
    }
  };
};
