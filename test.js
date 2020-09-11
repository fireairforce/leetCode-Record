// var name = 'window'
// var person1 = {
//   name: 'person1',
//   foo1: function () {
//     console.log(this.name)
//   },
//   foo2: () => console.log(this.name),
//   foo3: function () {
//     return function () {
//       console.log(this.name)
//     }
//   },
//   foo4: function () {
//     return () => {
//       console.log(this.name)
//     }
//   }
// }
// var person2 = { name: 'person2' }

// person1.foo1() // person1
// person1.foo1.call(person2) // person2

// person1.foo2() // window
// person1.foo2.call(person2) // window

// person1.foo3()()
// person1.foo3.call(person2)()
// person1.foo3().call(person2)

// person1.foo4()()
// person1.foo4.call(person2)()
// person1.foo4().call(person2)


// function convertNum(number) {
//   // write code here
//   let str = String(number);
//   let prefix = str[0] === '-' ? '-' : '';
  
//   // 如果有前缀
//   if (prefix) {
//     // 前缀去,然后翻转
//     let newStr = str.slice(1).split('').reverse();
//     let index = 0
//     while (newStr[index] && newStr[index] === '0') {
//        index ++;
//     }
//     newStr = newStr.join('').slice(index)
//     return prefix + newStr;
//   } else {
//      let newStr = str.split('').reverse();
//      let index = 0
//     while (newStr[index] && newStr[index] === '0') {
//        index ++;
//     }
//     newStr = newStr.join('').slice(index)
//     return newStr;
//   }
// }


// var a = 1;  
// function b() {  
//     a = 10;  
//     return;  
//     function a() {console.log('function')}  
// }  
// b();  
// console.log(a);

// var a = 1;
// function b(){
//     a = 10;
//     return;
// }
// b();
// console.log(a);


// function Page () {
//     return this.hosts;
// }

// Page.hosts = ['p1']
// Page.prototype.hosts = ['p1']

// const p1 = new Page()
// const p2 = Page();
// console.log(p1.hosts);
// console.log(p2.hosts);

var a = 20;

(function() {
  console.log(name);
  console.log(a);

  var name = 'wd'
  let a = 2;
}())
