/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let len = prices.length;
  if (len === 0) {
    return 0
  }
  let dp = []
  for (let i = 0; i < len; i++) {
    dp[i] = Array(2).fill(0)
  }
  for (let i = 0; i < len; i++) {
    if (i === 0) {
      dp[i][0] = 0;
      dp[i][1] = -prices[i]-fee
      continue;
    }
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    // 买股票前同时把手续费交了
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - fee - prices[i])
  }
  return dp[len - 1][0];
};
