/**
 * @param {number[][]} land
 * @return {number[]}
 */
var pondSizes = function (grid) {
  let m = grid.length
  if (m === 0) {
    return 0
  }
  let n = grid[0].length
  let res = -1
  const dfs = (grid, i, j, res) => {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== 0) {
      return
    }
    grid[i][j] = res
    dfs(grid, i + 1, j, res)
    dfs(grid, i - 1, j, res)
    dfs(grid, i + 1, j + 1, res)
    dfs(grid, i + 1, j - 1, res)
    dfs(grid, i - 1, j + 1, res)
    dfs(grid, i - 1, j - 1, res)
    dfs(grid, i, j + 1, res)
    dfs(grid, i, j - 1, res)
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        dfs(grid, i, j, res--)
      }
    }
  }
  let hash = new Map()
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] < 0) {
        hash.set(grid[i][j], hash.has(grid[i][j]) ? hash.get(grid[i][j]) + 1 : 1)
      }
    }
  }
  let ret = []
  for (let [key, value] of hash) {
    ret.push(value)
  }
  return ret.sort((a, b) => a - b)
}

// console.log(
//   pondSizes([
//     [0, 2, 1, 0],
//     [0, 1, 0, 1],
//     [1, 1, 0, 1],
//     [0, 1, 0, 1],
//   ]),
// )
