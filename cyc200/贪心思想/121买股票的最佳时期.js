/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let dp = [];
  dp[0] = 0;
  sum = prices[0];
  // dp数组里存储当天卖出股票的最大收益情况
  for (let i = 1; i < prices.length; i++) {
    dp[i] = Math.max(dp[i-1], prices[i] - sum);
    if (sum > prices[i]) {
      sum = prices[i];
    }
  }
  dp.sort((a,b)=>b-a)
  return dp[0];
};

maxProfit([7, 1, 5, 3, 6, 4])