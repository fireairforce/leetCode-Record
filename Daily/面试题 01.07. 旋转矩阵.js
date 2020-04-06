/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let n = matrix.length
  if (n === 0) {
    return matrix
  }
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      ;[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
  let mid = Math.floor(n / 2)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < mid; j++) {
      ;[matrix[i][j], matrix[i][n - 1 - j]] = [
        matrix[i][n - 1 - j],
        matrix[i][j],
      ]
    }
  }
}

// console.log(
//   rotate([
//     [ 5, 1, 9,11],
//     [ 2, 4, 8,10],
//     [13, 3, 6, 7],
//     [15,14,12,16]
//   ]),
// )
