/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxProductPath = function (grid) {
  const mod = 1e9 + 7;
  let m = grid.length;
  let n = grid[0].length
  let max = -1;
  const dfs = (i, j, temp) => {
    if (i > m - 1 || j > n - 1 || i < 0 || j < 0) {
      return;
    }
    if (temp === 0) {
      max = Math.max(temp, max)
      return;
    }
    if (i === m - 1 && j === n - 1) {
      max = Math.max(max, temp * grid[i][j])
      return;
    }
    dfs(i+1, j, temp * grid[i][j])
    dfs(i, j + 1, temp * grid[i][j])
    return;
  }
  dfs(0, 0, 1)
  return max % mod;
}

// console.log(
//   maxProductPath([
//     [-1, -2, -3],
//     [-2, -3, -3],
//     [-3, -3, -2],
//   ]),
// )

// console.log(
//   maxProductPath(
//     [[1,-2,1],
//     [1,-2,1],
//     [3,-4,1]]
//   ),
// )
