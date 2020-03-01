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
  let n = mat[0].length;
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array();
    for (let j = 0; j <= n; j++) {
      dp[i][j] = 0;
    }
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        mat[i - 1][j - 1] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
    }
  }
  let answer = mat;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      let x1 = Math.min(i + K, m);
      let x2 = Math.max(i - K, 1);
      let y1 = Math.min(j + K, n);
      let y2 = Math.max(j - K, 1);
      answer[i - 1][j - 1] =
        dp[x1][y1] - dp[x1][y2 - 1] - dp[x2 - 1][y1] + dp[x2 - 1][y2 - 1];
    }
  }
  return answer;
};