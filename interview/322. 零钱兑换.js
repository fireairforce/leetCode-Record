/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (amount === 0) {
    return 0
  }
  let dp = Array(amount + 1).fill(Number.MAX_VALUE)
  dp[0] = 0;
  // 完全背包问题，里面的物体可以无限取
  // 状态转移方程式为 dp[i] = Math.max(dp[i], dp[i-conis[j]] + 1)
  for (let i = 1;i <= amount;i ++) {
    for (let j = 0;j<coins.length;j++) {
      if (i >= coins[j]) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }
  if (dp[amount === Number.MAX_SAFE_INTEGER]) {
    return -1;
  } else {
    return dp[amount]
  }
};