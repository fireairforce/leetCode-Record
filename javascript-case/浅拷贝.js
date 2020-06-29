// 使用原生的 Object.assign()
var obj1 = {
  value: 'a'
}

var obj2 = Object.assign({}, obj1)
obj2.value = 'b'
console.log(obj1.value); // a

// JSON.parse(JSON.stringify())