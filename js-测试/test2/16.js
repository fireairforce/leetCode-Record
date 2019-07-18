//  js中不用var直接声明的变量是全局变量

function globals() {
    var myObject = {
      name : 'Jory'
    };

    return myObject;
}