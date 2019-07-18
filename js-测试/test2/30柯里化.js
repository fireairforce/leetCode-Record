// 柯里化是把接受多个采纳数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术

function curryIt(fn) {
    var length = fn.length,
        args = [];
    var result = function (arg) {
        args.push(arg);
        length--;
        if (length <= 0) {
            return fn.apply(this,args); 
        } else {
            return result;
        }
    }
    return result;
}