/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.queue = []
  this.dequeue = []
}

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queue.push(x)
}

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  while (this.queue.length > 1) {
    this.dequeue.push(this.queue.shift())
  }
  let temp = this.queue.shift()
  this.queue = this.dequeue
  this.dequeue = []
  return temp
}

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  while (this.queue.length > 1) {
    this.dequeue.push(this.queue.shift())
  }
  let temp = this.queue.shift()
  this.dequeue.push(temp)
  this.queue = this.dequeue
  this.dequeue = []
  return temp
}

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.queue.length === 0
}

// var obj = new MyStack()
// obj.push(1)
// var param_2 = obj.pop()
// var param_3 = obj.top()
// var param_4 = obj.empty()
