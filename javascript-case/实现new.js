function objectFactory() {
  const obj = {};
  const Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  const ret = Constructor.apply(obj, arguments);
  return typeof ret === "object" ? ret : obj;
}


function _new(fn, ...arg) {
  const obj = Object.create(fn.prototype);
  const ret = fn.apply(obj, arg);
  return ret instanceof Object ? ret : obj;
}
