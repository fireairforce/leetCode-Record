


// 调用函数可以使用call或者apply这两个方法，区别在于call需要将传递给函数的参数明确写出来，是多少参数就需要写多少参数。而apply则将传递给函数的参数放入一个数组中，传入参数数组即可。
function argsAsArray(fn, arr) {
    return fn.apply(this,arr);
}

