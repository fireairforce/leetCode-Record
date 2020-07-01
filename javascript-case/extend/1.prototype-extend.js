function Super() {
    this.colors = [1,2,3,4,5]
}
function Sub() {

}

Sub.prototype = new Super();

let instance1 = new Sub();
instance1.colors.push(7);
console.log(instance1.colors);

let instance2 = new Sub();
console.log(instance2.colors);

/**
 * 缺点:过多继承了没有用的属性
 * 它会使得引用类型值的原型属性被所有实例共享
 */

