var CQueue = function() {
  this.stack1 = []
  this.stack2 = []
};

/** 
 * @param {number} value
 * @return {void}
 */
// 放值的时候正常存队列
CQueue.prototype.appendTail = function(value) {
  this.stack1.push(value)
};

/**
 * @return {number}
 */
// 从头部推的时候把剩下的值都直接推到另外一个栈里面去
CQueue.prototype.deleteHead = function() {
  if (!this.stack2.length) {
    if (!this.stack1.length) {
      return -1;
    }
    while(this.stack1.length) {
      this.stack2.push(this.stack1.pop())
    }
    return this.stack2.pop()
  } else {
    return this.stack2.pop()
  }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */