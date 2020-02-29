/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let dp = Array(nums.length).fill(0)
  dp[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
  }
  return dp.sort((a, b) => b - a)[0]
}
