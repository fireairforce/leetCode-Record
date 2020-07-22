/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// n的三次方写法
var threeSumClosest_ON3 = function (nums, target) {
  if (nums.length <= 2) {
    return
  }
  let res
  let sum = nums[0] + nums[1] + nums[2]
  let count = target - sum
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        res = target - (nums[i] + nums[j] + nums[k])
        if (Math.abs(res) <= Math.abs(count)) {
          count = res
          sum = nums[i] + nums[j] + nums[k]
        }
      }
    }
  }
  return sum
}

// 使用双指针优化
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 双指针
var threeSumClosest = function (nums, target) {
  if (nums.length <= 2) {
    return
  }
  nums.sort((a, b) => a - b)
  let closeNum = nums[0] + nums[1] + nums[2]
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1,
      r = nums.length - 1
    while (l < r) {
      let sum = nums[l] + nums[r] + nums[i]
      if (Math.abs(sum - target) < Math.abs(closeNum - target)) {
        closeNum = sum
      }
      if (sum > target) {
        r--
      } else if (sum < target) {
        l++
      } else {
        return target
      }
    }
  }
  return closeNum
}
