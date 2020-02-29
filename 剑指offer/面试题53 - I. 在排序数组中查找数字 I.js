/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let l = 0
  let r = nums.length - 1
  let sum = 0
  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (nums[mid] === target) {
      sum++
      if (nums[mid] !== nums[r]) {
        r--
      }
      if (nums[mid] !== nums[l]) {
        l++
      }
      if (nums[mid] === nums[l] && nums[mid] === nums[r]) {
        return r - l + 1
      }
    } else if (nums[mid] > target) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return sum
}
