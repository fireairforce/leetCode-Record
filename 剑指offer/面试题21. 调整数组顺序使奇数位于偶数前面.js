/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  let l = 0
  let r = nums.length - 1
  while (l < r) {
    while (l < r && nums[l] % 2 !== 0) {
      l++
    }
    while (l < r && nums[r] % 2 === 0) {
      r--
    }
    if (l < r) {
      ;[nums[l], nums[r]] = [nums[r], nums[l]]
    }
  }
  return nums
}
