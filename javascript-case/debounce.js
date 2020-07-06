// 在事件触发n秒之后在执行回调，若在此之类又触发了则重新计时
const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

// 防抖可以用于多次提交的按钮，只执行最后提交的一次
// “防抖重在清零”
const debounce = (f, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      f(...args)
    }, delay)
  }
}
