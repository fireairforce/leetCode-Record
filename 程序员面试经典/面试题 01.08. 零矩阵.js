/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let flag = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        flag.push([i, j])
      }
    }
  }
  let m = matrix.length
  let n = matrix[0].length
  for (let i = 0; i < flag.length; i++) {
    for (let j = 0; j < m; j++) {
      for (let k = 0; k < n; k++) {
        if(j === flag[i][0] || k === flag[i][1]) {
          matrix[j][k] = 0
        }
      }
    }
  }
}
