/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

//  完全背包问题
// 用dp[i]表示组成i块钱最少需要的硬币数
//  dp[i] = Math.min(dp[i],dp[i-conis[j] + 1])
var coinChange = function(coins, amount) {
  if (amount === 0) {
    return 0;
  }
  let dp = Array(amount + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;
  // dp[i] = Math.min(dp[i],dp[i-conis[j]] + 1)
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i >= coins[j]) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  if(dp[amount] === Number.MAX_VALUE) {
      return -1
  } else {
      return dp[amount];
  }
};

// console.log(coinChange([1,2,5],5));
