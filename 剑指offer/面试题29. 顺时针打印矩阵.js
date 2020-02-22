/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let res = []
  if (matrix.length === 0 || matrix[0].length === 0) {
    return res
  }
  let top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i])
    }
    for (let i = top + 1; i <= bottom; i++) {
      res.push(matrix[i][right])
    }
    if (top !== bottom) {
      for (let i = right - 1; i >= left; i--) {
        res.push(matrix[bottom][i])
      }
    }
    if (left !== right) {
      for (let i = bottom - 1; i > top; i--) {
        res.push(matrix[i][left])
      }
    }
    left++
    right--
    top++
    bottom--
  }
  return res
}
// console.log(
//   spiralOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ]),
// )

// res is [1,2,3,6,9,8,7,4,5]
