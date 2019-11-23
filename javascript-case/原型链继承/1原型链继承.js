Grand.prototype.lastName = "chen";
function Grand() {}
let grand = new Grand();
Father.prototype = grand;

function Father() {
    this.name = `hhh`;
}

let father = new Father();
Son.prototype = father;
function Son() {

}

var son = new Son();

/**
 * 缺点:过多继承了没有用的属性
 */