// 常数时间内获取到栈里面到最小元素
// 开个栈每次放两个元素进去，一个是当前元素，一个是栈里面的最小元素
let MinStack = function () {
  this.stack = []
}

MinStack.prototype.push = function (x) {
  if (this.stack.length === 0) {
    this.stack.push(x)
    this.stack.push(x)
  } else {
    // temp 先取到目前栈里面到最小元素，这里做个比较就可以了哈
    let temp = this.stack[this.stack.length - 1]
    this.stack.push(x)
    if (temp < x) {
      this.stack.push(temp)
    } else {
      this.stack.push(x)
    }
  }
}

MinStack.prototype.pop = function () {
  this.stack.pop()
  this.stack.pop()
}

MinStack.prototype.top = function () {
  // 注意这里是减2 😓
  return this.stack[this.stack.length - 2];
}

MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1]
}