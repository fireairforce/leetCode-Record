/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let cols = grid.length;
  if (cols <= 0) {
    return 0;
  }
  let rows = grid[0].length;
  for (let i = 0; i < cols; i++) {
    dp[i] = Array(rows - 1).fill(0);
  }
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (i === 0) {
        j === 0
          ? (dp[i][j] = grid[i][j])
          : (dp[i][j] = dp[i][j - 1] + grid[i][j]);
      } else {
        j === 0
          ? (dp[i][j] = dp[i - 1][j] + grid[i][j])
          : (dp[i][j] = Math.min(
              dp[i - 1][j] + grid[i][j],
              dp[i][j - 1] + grid[i][j],
            ));
      }
    }
  }
  return dp[cols - 1][rows - 1];
};
