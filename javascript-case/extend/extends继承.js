class Animal {
  constructor (color) {
    this.color = color;
  }

  greet (sound) {
    console.log(sound);
  }
}

class Dog extends Animal {
  constructor(color) {
    super(color)
    this.color = color
  }
}

let dog = new Dog('black')
dog.greet('QuQ')

/* 
  子类必须在 constructor 方法中调用 super 方法，否则新建实例时会报错。
  这是因为子类没有自己的 this 对象，而是继承了父类的 this 对象，然后对其进行加工。如果不调用 super 方法，子类就得不到 this 对象
*/