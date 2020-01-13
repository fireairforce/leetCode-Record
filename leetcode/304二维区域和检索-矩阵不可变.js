/**
 * @param {number[][]} matrix
 */
let dp = [];
var NumMatrix = function(matrix) {
  let m = matrix.length;
  if (m <= 0) {
    return;
  }
  let n = matrix[0].length;
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array();
    for (let j = 0; j <= n; j++) {
      dp[i][j] = 0;
    }
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        matrix[i - 1][j - 1] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  return (
    dp[row2 + 1][col2 + 1] -
    dp[row2 + 1][col1] -
    dp[row1][col2 + 1] +
    dp[row1][col1]
  );
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
