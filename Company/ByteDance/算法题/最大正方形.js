/**
 * @param {character[][]} matrix
 * @return {number}
 */

//  dp[i][j]表示以第i行第j列为右下角所能构成的最大正方形边长
// dp[i][j] = 1 + min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1]);
var maximalSquare = function(matrix) {
  let rows = matrix.length;
  if (rows < 1) {
    return 0;
  }
  let cols = matrix[0].length;
  let max = 0;
  let dp = [];
  for (let i = 0; i < rows + 1; i++) {
    dp[i] = new Array();
    for (let j = 0; j < cols + 1; j++) {
      dp[i][j] = 0;
    }
  }
  for (let i = 1; i < rows + 1; i++) {
    for (let j = 1; j < cols + 1; j++) {
      if (matrix[i - 1][j - 1] === "1") {
        dp[i][j] =
          1 + Math.min(dp[i - 1][j - 1], Math.min(dp[i - 1][j], dp[i][j - 1]));
        max = Math.max(max, dp[i][j]);
      }
    }
  }
  return max * max;
};
