function Super() {
  this.colors = [1,2,3,4];
}

function Sub(name){
  // 继承super
  Super.call(this,name);
  this.name = name;
}

Sub.prototype.sayName = function(name){
  console.log(this.name);
}

let instance1 = new Sub('wd');
instance1.colors.push(5);
console.log(instance1.colors);
instance1.sayName()

let instance2 = new Sub('xyx');
console.log(instance2.colors);
instance2.sayName();
/**
 * 优点: 可以传参
   缺点:  1.不能继承借用构造函数的原型
         2.每次构造函数都要多走一个函数 
 */
