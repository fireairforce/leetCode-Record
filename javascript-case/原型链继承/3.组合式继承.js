function Super(name) {
  this.name = name;
  this.colors = [1, 2, 3, 4, 5, 6];
}

Super.prototype.sayName = function() {
  console.log(this.name);
};

function Sub(name, age) {
  // 继承Super属性(第二次调用Sup构造函数)
  Super.call(this, name);
  this.age = age;
}

Sub.prototype = new Super(); // 继承了Super 原型链上的方法 (第一次调用Sup构造函数)
Sub.prototype.constructor = Sub;
Sub.prototype.sayAge = function() {
  console.log(this.age);
};

let instance1 = new Sub("wd", 20);
instance1.colors.push(7);
console.log(instance1.colors);
instance1.sayAge();
instance1.sayName();

let instance2 = new Sub("xyx", 19);
console.log(instance2.colors);
instance2.sayAge();
instance2.sayName();

/**
 * 原型链继承能够使用构造函数继承继承到父亲上面的属性
 * 能够用原型链继承继承到父亲上的方法,但是这里它会调用两次构造函数，使得效率没有那么的高
 */
