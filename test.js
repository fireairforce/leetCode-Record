// function test(source){
//   var target = {};
//   for(var key in source){
//     if(Object.prototype.hasOwnProperty.call(source,key)){
//       if(typeof source[key]==='object'){
//         target[key] = test(source[key]);
//       } else {
//         target[key] = source[key];
//       }
//     }
//   }
//   return target;
// }
// var a = {a1:'a1',a2:{b1:'b1',b2:'b2'},a3:undefined,a4:null,a5:1}
// var b = test(a);
// console.log(b);

// let a = 0;
// const obj = {
//   a:1,
//   b:function(){
//     console.log(this.a);
//   }
// }
// const obj1 = {
//   a:2
// }
// const fun = obj.b;
// fun();
// fun.apply(obj);
// fun.bind(obj1).apply(obj);
// const fun1 = fun.bind(obj1);
// new fun();

// console.log(Function.prototype);

// const arr = [];
// const testObj = {};
// console.log(arr === "");
// console.log(arr == "");

// arr.toString =()=>1;
// console.log(arr === 1);
// console.log(arr == 1);

// function func(){
//   this.name = 'Hellen';
// }
// console.log(typeof func.prototype);

// let uniqueify = (arr, func) => {
//   if (!func) {
//     return [...new Set(arr)];
//   } else {
//     let tempStr = {};
//     let num = [];
//     for (let i = 0; i < arr.length; i++) {
//       tempStr[func(arr[i])] = 0;
//       num[i] = 0;
//     }
//     for(let i = 0;i<arr.length;i++){
//       tempStr[func(arr[i])] ++;
//       num[i] = tempStr[func(arr[i])];
//     }
//     let tempArr= [];
//     for(let i = 0,j=0;i<arr.length;i++){
//       if(num[i]===1){
//         tempArr[j++] = arr[i]
//       }
//     }
//    return tempArr
//   }
// }
// let test1 = [
//   { name:'xx',sex:'male' },
//   { name:'xx',sex:'male' },
//   { name:'wd',sex:'male' },
//   { name:'xyx',sex:'female' }
// ]
// let test2 = [
//   { id:1,name:'xx' },
//   { id:1,name:'xx' },
//   { id:2,name:'xx' },
//   { id:1,name:'xx' },
//   { id:1,name:'xx' },
// ]

// console.log(uniqueify((test2),a=>(a.id)));

// console.log(['1','2','3'].map(parseInt));

// function QAQ(x, y) {
//   this.x = x;
//   this.y = y;
//   this.bark = function() {
//     console.log(`哈哈哈`);
//   };
// }
// const m = new QAQ(1, 2);
// console.log(m.x);
// m.bark();

// const an = [1, 2, 5, 7];

// console.log(Object.prototype.toString.call([]));
// console.log(Object.prototype.toString.call("a"));
// console.log(Object.prototype.toString.call({}));
// console.log(Object.prototype.toString.call(1));
// console.log(Object.prototype.toString.call(undefined));
// console.log(Object.prototype.toString.call(null));

// function Foo(x, y) {
//   this.x = x;
//   this.y = y;
//   this.print = function() {
//     console.log(this.x);
//   };
// }

// const hh = new Foo(1, 2);

// console.log(hh.__proto__ === Foo.prototype);
// console.log(Foo.prototype.__proto__.__proto__);
// console.log(Foo.__proto__ === Function.prototype);


// const obj = {
//   arr:[1,2,3,4],
//   xxx: function(){
//      for(var i = 0;i<this.arr.length;i++){
//        console.log(`${i}`)
//      }
//   }
// }
// obj.xxx();
// just test ...
// 相同大小的方格组成的m行n列的网格，从中心的一个方格一圈一圈向外排序，例如

sortGrid = (x,y) => {
  
}




[[1,1],
[0,1],
[0,0],
[1,0],
[2,0],
[2,1],
[2,2],
[1,2],
[0,2]]