var foo = {
    name:'wd',
    logName: function() {
        console.log(this.name);
    }
}

var bar = {
    name:"xyx"
}

// 用一个新的this对象替换掉另外一个对象
foo.logName.call(bar);

// 这里call改变了foo的this指向为bar,并且执行这个函数

// 使用call实现继承
function Animal(name){
   this.name = name;
   this.showName = function(){
       console.log(this.name);
   }
}

function Cat(name) {
    Animal.call(this,name);
}

var cat = new Cat('black cat');
cat.showName();

// 合并数组
let a1 = [1,2,3];
let a2 = [4,5,6];
Array.prototype.push.apply(a1,a2);

// 求数组的最大值
Math.max.call(null,a1);

// 判断字符串的类型
Object.prototype.toString.call({})

