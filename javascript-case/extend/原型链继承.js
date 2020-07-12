// 父类
function Father () {
  this.name = 'father'
  this.type = ['a', 'b']
}

// 父类的一些公有方法
Father.prototype.greet = function (word) {
  console.log(word);
}

// 声明子类
function Son () {
  this.name = 'son'
}

// 子类继承一下父类
Son.prototype = new Father()

let xyx = new Son();
xyx.greet('叫wd👨')
// xyx.type.push('c')
// console.log(xyx.type);

let wd = new Son()
// console.log(wd.type);
/* 
  缺点：1.引用缺陷
// xyx.type.push('c')
  这个地方修改继承自 Father 中的数组类型是，另外一个实例里面的引用类型的值也会收到影响
  2. 没办法为不同的实例初始化继承来的属性
  function Animal (color) {
    this.color = color;
  }
  ...
  Dog.prototype = new Animal('white')
  ... 
  console.log(dog1.color)
  console.log(dog2.color)
*/