/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  let len = coins.length
  let dp = []
  for (let i = 0; i <= len; i++) {
    dp[i] = []
    for (let j = 0; j <= amount; j++) {
      dp[i][j] = 0
      dp[i][0] = 1
    }
  }
  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= amount; j++) {
      if (j >= coins[i - 1]) {
        // 注意这里如果使用了硬币 i ,那么此时的 dp值为 dp[i][j-coins[i-1]]
        dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]]
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }
  return dp[len][amount]
}
