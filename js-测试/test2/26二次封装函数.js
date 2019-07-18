function partial(fn, str1, str2) {
    function result(str3) {
        return fn.apply(this, [str1, str2, str3]);
    }
    return result;
}