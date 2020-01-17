/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */

//  dp[i][j]表示前i个数和为j的方法数
//  dp[i][j] = dp[i-1][i-nums[i]] + dp[i-1][i+nums[i-1]]
var findTargetSumWays = function(nums, S) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  if (S < -sum || S > sum) {
    return 0;
  }
  let dp = [];
  for (let i = 0; i <= nums.length; i++) {
    for (let j = 0; j < 2 * sum + 1; j++) {
      dp[i][j] = 0;
    }
  }
  //   这里对数组进行一个平移,0个数字合成0的方法数为1,0 + sum 为0,0为-sum
  dp[0][0 + sum] = 1;
  for (let i = 0; i <= nums.length; i++) {
    for (let j = 0; j < 2 * sum + 1; j++) {
      if (j + nums[i - 1] < 2 * sum + 1) {
        dp[i][j] += dp[i - 1][j + nums[i - 1]];
      }
      if (j - nums[i - 1] >= 0) {
        dp[i][j] += dp[i - 1][j - nums[i - 1]];
      }
    }
  }
  return dp[nums.length][sum + S];
};
