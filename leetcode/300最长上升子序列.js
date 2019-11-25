/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (nums.length <= 0) {
    return 0;
  }
  let dp = Array(nums.length).fill(1);
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        dp[j] = Math.max(dp[i] + 1, dp[j]);
      }
    }
  }
  //   console.log(dp);
  dp.sort((a, b) => b - a);
  return dp[0];
};

// console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
