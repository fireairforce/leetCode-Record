var MinStack = function() {
  this.stack = [];
  this.min = Number.MAX_VALUE;
};
MinStack.prototype.push = function(x) {
  // update 'min'
  const min = this.min;
  if (x < this.min) {
    this.min = x;
  }
  return this.stack.push(x - min);
};
MinStack.prototype.pop = function() {
  const item = this.stack.pop();
  const min = this.min;

  if (item < 0) {
    this.min = min - item;
    return min;
  }
  return item + min;
};
MinStack.prototype.top = function() {
  const item = this.stack[this.stack.length - 1];
  const min = this.min;

  if (item < 0) {
    return min;
  }
  return item + min;
};
MinStack.prototype.getMin = function() {
  return this.min;
};