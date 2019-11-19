/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array();
    for (let j = 0; j <= n; j++) {
      dp[i][j] = 0;
    }
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = j === 1 ? 1 : dp[i - 1][j] + dp[j][i - 1];
    }
  }
  return dp[m][n];
};
