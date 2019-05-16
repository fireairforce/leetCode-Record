// 修改函数的声明方式

function functions(flag) {
    if (flag) {
        //   function getValue() { return 'a'; }
        var getValue = function () {
            return 'a';
        }
    } else {
        //   function getValue() { return 'b'; }
        var getValue = function () {
            return 'b'
        }
    }
    return getValue();
}