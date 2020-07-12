// 组合继承就是将前面原型链继承和构造函数继承结合在一起
function Animal (color) {
  this.name = 'animal'
  this.color = color;
  this.type = ['a', 'b', 'c']
}

// 添加公共的方法
Animal.prototype.greet = function (sound) {
  console.log(sound);
}

// 声明子类
function Dog (color) {
  // 使用构造函数继承
  Animal.apply(this, arguments)
}

// 原型链继承
Dog.prototype = new Animal()

let dog = new Dog('black')
let dog1 = new Dog('yellow')

// 这种继承也是有小缺陷的，就是它会调用两次父类的构造函数