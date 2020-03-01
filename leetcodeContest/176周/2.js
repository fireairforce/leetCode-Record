var ProductOfNumbers = function() {
  this.arr = []
}

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
  this.arr.push(num)
}

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    let sum = 1;
    for(let i = this.arr.length - k;i<this.arr.length;i++) {
      sum *= this.arr[i];
    }
    return sum;
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
