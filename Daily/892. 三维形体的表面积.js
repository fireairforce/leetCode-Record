/**
 * @param {number[][]} grid
 * @return {number}
 */
// 求出总的表面积 & 减去重叠的表面积
var surfaceArea = function(grid) {
  let n = grid.length
  let CubeSum = 0
  let faceSum = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      CubeSum += grid[i][j]
      if (grid[i][j] > 0) {
        // 当前与下面的重合
        faceSum += grid[i][j] - 1
      }
      if (i > 0) {
        // 当前与上面的重合
        faceSum += Math.min(grid[i - 1][j], grid[i][j])
      }
      if (j > 0) {
        // 当前与左边的重合
        faceSum += Math.min(grid[i][j - 1], grid[i][j])
      }
    }
  }
  return 6 * CubeSum - 2 * faceSum
}
