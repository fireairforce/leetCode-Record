// 父类
function Animal(color) {
  this.color = color;
  this.type = ['a', 'b', 'c']
  this.name = 'animal'
}

// 添加公共的方法
Animal.prototype.greet = function (sound) {
  console.log(sound);
}

// 声明子类
function Dog(color) {
  Animal.call(this, color)
  // 或者 Animal.call(this, arguments)
}

let dog = new Dog('black')
let dog2 = new Dog('white')

dog.type.push('d')
dog2.type.push('e')

console.log(dog.type);
console.log(dog2.type);

// 相当于在 Dog 子类将 Dog 子类中的变量在父类中执行一遍，这样子类就有了父类中的共有属性和方法

/* 
 缺点：
 不过这种方法也有缺陷，他没办法获取到父类中的共有办法，也就是父类原型中的方法和变量。
 dog1.greet('hhh'); // 这个是会报错的
*/