function useArguments() {
    var arr = Array.prototype.slice.call(arguments);
    return eval(arr.join('+'));
}