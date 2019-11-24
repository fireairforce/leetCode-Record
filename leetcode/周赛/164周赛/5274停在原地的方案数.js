/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {
  let dp = [];
  let mod = 1e9 + 7;
  for (let i = 0; i < steps + 1; i++) {
    dp[i] = new Array();
    for (let j = 0; j < steps + 1; j++) {
      dp[i][j] = 0;
    }
  }
  dp[0][0] = 1;
  for (let i = 1; i < steps + 1; i++) {
    for (let j = 0; j <= Math.min(i, arrLen - 1); j++) {
      dp[i][j] = dp[i - 1][j];
      if (j >= 1) {
        dp[i][j] += dp[i - 1][j - 1];
        dp[i][j] %= mod;
      }
      if (j < i) {
        dp[i][j] += dp[i - 1][j + 1];
        dp[i][j] %= mod;
      }
    }
  }
  return dp[steps][0];
};
