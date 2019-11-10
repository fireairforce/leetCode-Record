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
function SayHi(e) {
  console.log(e.target.innerWidth, e.target.innerHeight);
}

window.addEventListener("resize", throttle(SayHi));
