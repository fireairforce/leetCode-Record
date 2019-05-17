function callIt(fn) {
    var args = Array.prototype.slice.call(arguments,1);
    var result = fn.apply(null,args);
    return result;
}