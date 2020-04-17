/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let index = nums.length - 1
  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= index) {
      index = i
    }
  }
  return index === 0
}
