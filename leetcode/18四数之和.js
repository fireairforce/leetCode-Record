/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 两层循环套个双指针
var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b)
  let len = nums.length
  let res = []
  for (let i = 0; i < len - 3; i++) {
    // 去重
    if (nums[i] === nums[i - 1]) {
      continue
    }
    for (let j = i + 1; j < len - 2; j++) {
      // 去重
      if (res.length > 0) {
        let res0 = res[res.length - 1][0]
        let res1 = res[res.length - 1][1]
        if (res0 === nums[i] && res1 === nums[j]) {
          continue
        }
      }
      let left = j + 1
      let right = len - 1
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right]
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]])
          // 遇到满足条件的之后，指针继续往左走
          left++
          // 去重
          while (nums[left] === nums[left - 1]) {
            left++
          }
        } else if (sum < target) {
          left++
        } else {
          right--
        }
      }
    }
  }
  return res
}

console.log(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0))
