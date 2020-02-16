/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false
  }
  let m = matrix.length
  let n = matrix[0].length
  let row = 0
  let col = n - 1
  while (col >= 0 && row <= m - 1) {
    if (matrix[row][col] === target) {
      return true
    } else if (matrix[row][col] < target) {
      row++
    } else {
      col--
    }
  }
  return false
}
