/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
  this.maxSize = maxSize
  this.queue = []
}

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  if (this.queue.length < this.maxSize) {
    this.queue.push(x)
  }
}

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  return this.queue.length >= 1 ? this.queue.pop() : -1
}

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  if (this.queue.length <= k) {
    for (let i = 0; i < this.queue.length; i++) {
      this.queue[i] += val
    }
  } else {
    for (let i = 0; i < k; i++) {
      this.queue[i] += val
    }
  }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

// var obj = new CustomStack(3)
// obj.push(1)
// obj.push(2)
// console.log(obj.pop())
// obj.push(2)
// obj.push(3)
// obj.push(4)
// obj.increment(5, 100)
// obj.increment(2, 100)
// console.log(obj.pop())
// console.log(obj.pop())
// console.log(obj.pop())
// console.log(obj.pop())
