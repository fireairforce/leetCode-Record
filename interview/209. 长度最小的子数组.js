/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var shortestSubarray = function (nums, s) {
  let res = Number.MAX_VALUE
  let len = nums.length
  let j = -1
  let sum = 0
  for (let i = 0; i < len; i++) {
    nums[i] = nums[i] + 100000
  }
  for (let i = 0; i < len; i++) {
    sum += nums[i]
    // 在和累计到大于 target 之后，缩减出最短的长度
    while (sum >= s + 100000 * (i - j + 1)) {
      sum -= nums[++j]
      res = Math.min(res, i - j + 1)
    }
  }
  return res === Number.MAX_VALUE ? -1 : res
}

console.log(shortestSubarray([1, 2], 4))
console.log(shortestSubarray([1], 1))

