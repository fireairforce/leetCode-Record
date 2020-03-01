/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  let m = grid.length
  let n = grid[0].length
  let res = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] < 0) {
        res++
      }
    }
  }
  return res
}
