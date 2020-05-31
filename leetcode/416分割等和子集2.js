const solve = (nums) => {
  let sum = nums.reduce((prev, next) => prev + next)
  if (sum & 1) {
    return false
  }
  let dp = []
  for (let i = 1; i <= nums.length; i++) {
    dp[i] = []
    for (let j = 0;j<sum/2;j++) {
      dp[i][0] = true;
    }
    for (let )
  }
}
