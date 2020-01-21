/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let dp = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    let minVal = Number.MAX_VALUE;
    for (let j = 1; j * j <= i; j++) {
      minVal = Math.min(minVal, dp[i - j * j]);
    }
    dp[i] = minVal + 1;
  }
  return dp[n];
};
