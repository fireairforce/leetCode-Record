/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let res = 0
  const row = grid.length
  if (row === 0) {
    return 0
  }
  const cols = grid[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j, row, cols)
        res++
      }
    }
  }
  return res
}

const dfs = (grid, i, j, row, cols) => {
  if (i < 0 || j < 0 || i > row - 1 || j > cols - 1 || grid[i][j] === '0') {
    return
  }
  grid[i][j] = '0'
  dfs(grid, i + 1, j, row, cols)
  dfs(grid, i - 1, j, row, cols)
  dfs(grid, i, j + 1, row, cols)
  dfs(grid, i, j - 1, row, cols)
}
