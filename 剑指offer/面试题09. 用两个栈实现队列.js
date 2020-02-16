var CQueue = function() {
    this.in = [];
    this.out = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    while(this.out.length) {
        this.in.push(this.out.pop())
    }
    this.in.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    while(this.in.length) {
        this.out.push(this.in.pop())
    }
    if(!this.out.length) {
        return -1;
    }
    return this.out.pop()
};

/** 
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */