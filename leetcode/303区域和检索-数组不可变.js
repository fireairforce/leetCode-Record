/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.sums = Array(nums.length).fill(0)
  if (nums.length === 0) {
    return
  }
  //   let sums = Array(nums.length).fill(0)
  this.sums[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    this.sums[i] += this.sums[i - 1] + nums[i]
  }
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if (i === 0) {
    return this.sums[j]
  } else {
    return this.sums[j] - this.sums[i - 1]
  }
}

// var arr = new NumArray([-2, 0, 3, -5, 2, -1])

// console.log(arr.sumRange(0, 2))
// console.log(arr.sumRange(2, 5))
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
