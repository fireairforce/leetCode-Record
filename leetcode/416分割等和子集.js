/**
 * @param {number[]} nums
 * @return {boolean}
 */

//  一个比较典型的01背包问题
var canPartition = function (nums) {
  let len = nums.length;
  if (len === 0) {
    return false;
  }
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  // 边界情况
  if (sum % 2 !== 0) {
    return false;
  }
  let target = sum / 2;
  // 创建dp数组
  let dp = [];
  for (let i = 0; i < len; i++) {
    dp[i] = new Array();
    for (let j = 0; j < target + 1; j++) {
      dp[i][j] = 0;
    }
  }
  if(nums[0] <= target) {
    dp[0][nums[0]] = 1;
  }
  // 相当于在数组里面取dp[i][j]表示取到第i个数能否放满容量为j的背包
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < target + 1; j++) {
      dp[i][j] = dp[i - 1][j];
      if (nums[i] === j) {
        dp[i][j] = 1;
        continue;
      }
      if (nums[i] < j) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
      }
    }
  }
  return dp[len - 1][target] === 1;
};

canPartition([1,5,11,5])