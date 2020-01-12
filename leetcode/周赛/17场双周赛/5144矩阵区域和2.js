/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, K) {
  let m = mat.length;
  if (m <= 0) {
    return;
  }
  let dp = [];
  let answer = [];
  let n = mat[0].length;
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array();
    answer[i] = new Array();
    for (let j = 0; j <= n; j++) {
      dp[i][j] = 0;
      answer[i][j] = 0;
    }
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = mat[i-1][j-1] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        // wait a minute
    //    answer[i][j] = 
    }
  }
};
