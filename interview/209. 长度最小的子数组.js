/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let res = 0
  let len = nums.length
  let j = -1
  let sum = 0
  for (let i = 0; i < len; i++) {
    sum += nums[i]
    // 在和累计到大于 target 之后，缩减出最短的长度
    while (sum >= s) {
      sum -= nums[++j]
      res = res !== 0 ? Math.min(res, i - j + 1) : (i - j + 1);
    }
  }
  return res;
};