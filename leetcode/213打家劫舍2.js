/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) {
    return 0
  }
  if (nums.length === 1) {
    return nums[0]
  }
  let max = 0,
    i
  let dp = Array(nums.length).fill(0)
  for (i = 0; i < nums.length - 1; i++) {
    dp[i] = Math.max(i >= 1 ? dp[i - 1] : 0, (i >= 2 ? dp[i - 2] : 0) + nums[i])
  }
  max = dp[i - 1]
  for (i = 1; i < nums.length; i++) {
    dp[i] = Math.max(i > 1 ? dp[i - 1] : 0, (i > 2 ? dp[i - 2] : 0) + nums[i])
  }
  return Math.max(max, dp[i - 1])
}
