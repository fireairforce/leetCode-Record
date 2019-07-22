Function.prototype.mybind = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error');
    }
    // 更换this的指向
    let _this = this;
    let arg = [...arguments].slice(1);
    return function F() {
        // 处理函数使用 new 的情况
        if (this instanceof F) {
            return new _this(...arg, ...arguments);
        } else {
            return _this.apply(context, arg.concat(...arguments));
        }
    }
}

