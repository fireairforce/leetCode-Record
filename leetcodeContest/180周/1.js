/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
  let res = []
  let m = matrix.length
  let n = matrix[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let flag1 = true
      let flag2 = true
      // 找当前行
      for (let k = 0; k < n; k++) {
        if (matrix[i][j] > matrix[i][k] && k !== j) {
          flag1 = false
        }
      }
      //   找当前列
      for (let p = 0; p < m; p++) {
        if (matrix[i][j] <= matrix[p][j] && i !== p) {
          flag2 = false
        }
      }
      if (flag1 && flag2) {
        res.push(matrix[i][j])
      }
    }
  }
  return res
}
// console.log(
//   luckyNumbers([
//     [7, 8],
//     [1, 2],
//   ]),
// )
// console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]));
// console.log(luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]));

