/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  let dp = []
  let len = prices.length;
  if (len === 0) {
    return 0
  }
  for (let i = 0; i < len; i++) {
    dp[i] = []
    for (let k1 = 0; k1 <= k; k1++) {
      dp[i][k1] = []
      for (let j = 0; j < 2; j++) {
        dp[i][k1][j] = 0
      }
    }
  }
  for (let i = 0; i < len; i++) {
    for (let k1 = k; k1 >= 1; k1--) {
      if (i === 0) {
        dp[i][k1][0] = 0;
        dp[i][k1][1] = -prices[i]
        continue;
      }
      dp[i][k1][0] = Math.max(dp[i - 1][k1][0], dp[i - 1][k1][1] + prices[i])
      dp[i][k1][1] = Math.max(dp[i - 1][k1][1], dp[i - 1][k1][0] - prices[i])
    }
  }
  return dp[len - 1][k][0];
};

// console.log(maxProfit(2,[2,4,1]));
// console.log(maxProfit(2, [3,2,6,5,0,3]));
