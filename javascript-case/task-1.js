async function async1() {
  console.log(1);
  const result = await async2();
  console.log(3);
}

async function async2() {
  console.log(2);
}

Promise.resolve().then(() => {
  console.log(4);
});

setTimeout(() => {
  console.log(5);
});

async1();
console.log(6);

//  1 2 6 4 3 5

let a = { a: 10 };
let b = { b: 10 };
let obj = {
  a: 10,
};
obj[b] = 20;
// 在obj[b]等于20之后 obj就变成了 {a:10,[object Object]:20}
// 这个a也是个对象，所以会输出20
console.log(obj[a]);

Function.prototype.myBind = function(context, ...arg) {
  if (typeof this !== "function") {
    throw new TypeError(`Error`);
  }
  let _this = this;
  return function F(...arg1) {
    if (this instanceof F) {
      return new _this(...arg, ...arg1);
    } else {
      return _this.apply(context, arg.concat(arg1));
    }
  };
};
