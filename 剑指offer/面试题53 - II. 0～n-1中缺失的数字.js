/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i
    }
  }
  return nums.length
}
