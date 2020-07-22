/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b)
  if (nums.length <= 2) {
    return []
  }
  let res = []
  let len = nums.length
  for (let i = 0; i < len - 2; i++) {
    if (i >= 1 && nums[i] === nums[i - 1]) {
      continue
    }
    let left = i + 1
    let right = len - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]])
        left++
        while (nums[left] === nums[left - 1]) {
          left++
        }
      } else if (sum < 0) {
        left++
      } else if (sum > 0) {
        right--
      }
    }
  }
  return res
}
