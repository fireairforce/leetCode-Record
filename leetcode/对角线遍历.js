/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
  let row = matrix.length;
  if (row === 0) {
    return matrix;
  }
  let col = matrix[0].length;
  let res = [];
  let r = 0,
    c = 0;
  for (let i = 0; i < col * row; i++) {
    res[i] = matrix[r][c];
    //   r + c 为遍历层数
    // 下往上遍历
    if ((r + c) % 2 === 0) {
      if (c === col - 1) {
        r++;
      } else if (r === 0) {
        c++;
      } else {
        r--;
        c++;
      }
    } else {
      if (r === row - 1) {
        c++;
      } else if (c === 0) {
        r++;
      } else {
        r++;
        c--;
      }
    }
  }
  return res;
};
console.log(findDiagonalOrder([[1,2,3,4,5],[4,5,6,7,9]]));
/**
 *  1 2 3 4 5
 *  4 5 6 7 9
 */
