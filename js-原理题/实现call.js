// 将要改变this指向的方法挂到目标this上执行并返回
Function.prototype.mycall = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('not function');
    }
    context = context || window;
    context.fn = this;
    let arg = [...arguments].slice(1);
    let result = context.fn(...arg);
    delete context.fn;
    return result;
}