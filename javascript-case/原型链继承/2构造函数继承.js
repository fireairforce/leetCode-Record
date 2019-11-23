function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

function Student(name, age, sex, grade) {
  Person.call(this, name, age, sex);
  this.grade = grade;
}

let student = new Student("wd", 18, "男", "大三");

/**
 * 优点: 可以传参
   缺点:  1.不能继承借用构造函数的原型
         2.每次构造函数都要多走一个函数 
 */
