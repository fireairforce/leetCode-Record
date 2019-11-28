function throttle(fn) {
  let flag = true;
  return function() {
    if (!flag) {
      return;
    }
    flag = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      //    用来标记函数执行完成
      flag = true;
    }, 500);
  };
}

function debounce(fn, time) {
  let timer = null;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, time || 500);
  };
}

function SayHi(e) {
  console.log(e.target.innerWidth, e.target.innerHeight);
}

window.addEventListener("resize", throttle(SayHi));

Function.prototype.myBind = function(context, ...arg) {
  if (typeof this !== "function") {
    throw new TypeError("这玩意儿不是函数");
  }
  const _this = this;
  return function F(...arg1) {
    if (this instanceof F) {
      return new _this(...arg, ...arg1);
    } else {
      return _this.apply(context, arg.concat(arg1));
    }
  };
};

Function.prototype.MyCall = function(context, ...arg) {
  if (typeof this !== "function") {
    throw new TypeError(`不是函数`);
  }
  context = context || window;
  context.fn = this;
  let result = context.fn(...arg);
  delete context.fn;
  return result;
};
