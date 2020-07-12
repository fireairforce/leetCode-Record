// 寄生组合式继承就相当于在组合继承的基础上减少一次多余的调用父类的构造函数
function Animal (color) {
  this.color = color;
  this.name = 'animal'
  this.type = ['a', 'b', 'c']
}

Animal.prototype.greet = function (sound) {
  console.log(sound);
}

function Dog (color) {
  Animal.apply(this, arguments)
  this.name = 'dog'
}

Dog.prototype = Object.create(Animal.prototype)

Dog.prototype.constructor = Dog;

Dog.prototype.getName = function () {
  console.log(this.name);
}

// 这里做出的优化就是不用像构造函数继承一样直接将父类 Animal 的一个实例赋值给 Dog.prototype，而是使用 Object.create() 进行了一次浅拷贝，将父类原型上的方法拷贝后赋值给 Dog.prototype ，这样子类上就可以有父类原型上的方法和属性了，同时减少了一次父类构造函数的调用

// Object.create() 的浅拷贝的作用类似于下面的函数：

function create (obj) {
  function F () {}
  F.prototype = obj;
  return new F();
}

// 这里要注意因为 Animal 的原型进行了拷贝后赋值给了 Dog.prototype，因此 Dog.prototype 上的 constructor 属性也被重写了，所以要使用一句
// Dog.prototype.constructor = Dog;