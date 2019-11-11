/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let dp = [];
  dp[0] = 0;
  sum = prices[0];
  for (let i = 1; i < prices.length; i++) {
    dp[i] = Math.max(dp[i - 1], prices[i] - sum);
    if (sum > prices[i]) {
      sum = prices[i];
    }
  }
  //   找出最大值
  dp.sort((a, b) => b - a);
  return dp[0];
};
