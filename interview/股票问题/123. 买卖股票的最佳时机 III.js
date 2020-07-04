/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxK = 2;
  let len = prices.length;
  if (len === 0) {
      return 0;
  }
  let dp = []
  for (let i = 0; i < len; i++) {
    dp[i] = []
    for (let k = maxK; k >= 0; k--) {
      dp[i][k] = []
      for (let j = 0; j < 2; j++) {
        dp[i][k][j] = 0;
      }
    }
  }
  for (let i = 0; i < len; i++) {
    for (let k = maxK; k >= 1; k--) {
      if (i === 0) {
        dp[i][k][0] = 0;
        dp[i][k][1] = -prices[i]
        continue;
      }
      // 卖了上一次的股票或者没有操作选取最大的利益
      dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
      // 买了新的股票或者没有做任何操作
      dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
    }
  }
  // 一共穷举了 len * maxK * 2 个状态
  return dp[len - 1][maxK][0];
};

// console.log(maxProfit([3,3,5,0,0,3,1,4]));