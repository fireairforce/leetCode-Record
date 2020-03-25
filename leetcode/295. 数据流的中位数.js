/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.arr = []
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  if (this.arr.length === 0) {
    this.arr.push(num)
    return
  }
  let l = 0,
    r = this.arr.length - 1
  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (this.arr[mid] === num) {
      this.arr.splice(mid, 0, num)
      return
    } else if (this.arr[mid] < num) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  this.arr.splice(r + 1, 0, num)
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  const len = this.arr.length
  if (len === 0) {
    return null
  }
  const mid = Math.floor((len - 1) / 2)
  if (len & 1) {
    return this.arr[mid]
  }
  return (this.arr[mid] + this.arr[mid + 1]) / 2
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
