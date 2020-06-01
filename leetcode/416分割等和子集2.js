const solve = (nums) => {
  let sum = nums.reduce((prev, next) => prev + next)
  if (sum & 1) {
    return false
  }
  let dp = []
  // init
  for (let i = 0; i < nums.length; i++) {
    dp[i] = []
    dp[i][0] = true
    for (let j = 1; j <= sum / 2; j++) {
      dp[i][j] = false
    }
  }
  dp[0][nums[0]] = true;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j <= sum / 2; j++) {
      if (j >= nums[i]) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]]
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }
  return dp[nums.length- 1][sum / 2]
}

// console.log(solve([1, 2, 5]))
// console.log(solve([1, 5, 11, 5]))
// console.log(solve([1, 2, 3, 5]))


