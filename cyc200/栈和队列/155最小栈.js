/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.min = Number.MAX_VALUE;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  // update 'min'
  const min = this.min;
  if (x < this.min) {
    this.min = x;
  }
  return this.stack.push(x - min);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const item = this.stack.pop();
  const min = this.min;

  if (item < 0) {
    this.min = min - item;
    return min;
  }
  return item + min;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  const item = this.stack[this.stack.length - 1];
  const min = this.min;

  if (item < 0) {
    return min;
  }
  return item + min;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */