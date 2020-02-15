/**
 * @param {number} n
 * @return {number}
 */
// dp[i][j] = dp[i][j] + dp[i-1][j-v[i]]
// dp[i][j]表示加入第i种硬币时总数为j的方法
// 这题是个背包问题，表示价值为x的物品放满背包有几种方法
var waysToChange = function(n) {
  let coins = [1, 5, 10, 25]
  let dp = Array(n + 1).fill(0)
  let mod = 1000000007
  dp[0] = 1
  for (let i = 0; i <= 4; i++) {
    for (let j = coins[i]; j <= n; j++) {
      dp[j] = (dp[j] + dp[j - coins[i]]) % mod
    }
  }
  return dp[n]
}
