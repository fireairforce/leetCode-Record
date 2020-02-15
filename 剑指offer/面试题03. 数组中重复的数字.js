/**
 * @param {number[]} nums
 * @return {number}
 */
// 这里要注意值的范围实在0~nums.length - 1里面的
var findRepeatNumber = function(nums) {
  let i = 0
  while (i < nums.length) {
    if (nums[i] === i) {
      i++
      continue
    }
    if (nums[nums[i]] === nums[i]) {
      return nums[i]
    }
    ;[nums[nums[i]], nums[i]] = [nums[i], nums[nums[i]]]
  }
  return -1
}

// console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
