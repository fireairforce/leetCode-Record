// 单位时间只能触发一次函数,单位时间内触发多次，只有一次生效
// 节流函数

const throttle = (fn, delay) => {
  let flag = true;
  return (...args) => {
    if (!flag) {
      return;
    }
    flag = false;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay);
  };
};
