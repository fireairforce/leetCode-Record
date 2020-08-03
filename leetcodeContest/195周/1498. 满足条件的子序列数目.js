/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
  nums.sort((a, b) => a - b)
  let len = nums.length
  const mod = 1e9 + 7
  let l = 0,
    r = len - 1
  let res = 0
  while (l <= r) {
    if (nums[l] + nums[r] > target) {
      r--
    } else {
      res = (res + (1 << (r - l))) % mod
      l++
    }
  }
  return res
}
