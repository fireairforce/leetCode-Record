/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let m = grid.length
  if (!m) {
    return 0
  }
  let n = grid[0].length
  const dfs = (grid, i, j) => {
    if (i >= m || i < 0 || j < 0 || j >= n || grid[i][j] === '0') {
      return
    }
    grid[i][j] = '0'
    dfs(grid, i + 1, j)
    dfs(grid, i, j + 1)
    dfs(grid, i - 1, j)
    dfs(grid, i, j - 1)
  }
  let res = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j)
        res++
      }
    }
  }
  return res
}

// console.log(numIslands());
