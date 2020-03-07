var MaxQueue = function() {
  this.queue = []
  this.maxQueue = []
}

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
  return this.queue.length ? this.maxQueue[0] : -1
}

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
  this.queue.unshift(value)
  while (
    this.maxQueue.length &&
    value > this.maxQueue[this.maxQueue.length - 1]
  ) {
    this.maxQueue.pop()
  }
  this.maxQueue.push(value)
}

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  if (this.queue.length === 0) {
    return -1
  }
  let val = this.queue.pop()
  if (this.maxQueue[0] === val) {
    this.maxQueue.shift()
  }
  return val
}

