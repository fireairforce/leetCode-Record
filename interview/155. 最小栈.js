let MinStack = function () {
  this.min = Number.MAX_VALUE;
  this.stack = []
}

MinStack.prototype.push = function (x) {
  let min = this.min;
  if (x < this.min) {
    this.min = x;
  }
  this.stack.push(x - min)
}

MinStack.prototype.pop = function () {
   let item = this.stack.pop()
   let min = this.min;
   if (item < 0) {
     this.min = min - item;
     return min;
   }
   return item + min;
}

MinStack.prototype.top = function () {
  let item = this.stack[this.stack.length - 1]
  let min = this.min

  if (item < 0) {
    return min;
  }

  return item + min;
}

MinStack.prototype.getMin = function () {
  return this.min;
}