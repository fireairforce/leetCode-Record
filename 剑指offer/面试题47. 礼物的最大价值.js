/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
  let m = grid.length
  if (m === 0) {
    return 0
  }
  let n = grid[0].length
  let dp = []
  for (let i = 0; i < m; i++) {
    dp[i] = new Array()
    for (let j = 0; j < n; j++) {
      dp[i][j] = 0
    }
  }
  dp[0][0] = grid[0][0]
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j !== 0) {
        dp[i][j] += grid[i][j] + dp[i][j - 1]
      } else if (i !== 0 && j === 0) {
        dp[i][j] += grid[i][j] + dp[i - 1][j]
      }
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
  }
  return dp[m - 1][n - 1]
}