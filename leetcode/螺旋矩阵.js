/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let row = matrix.length;
  let res = [];
  if(row === 0) {
      return res;
  }
  let col = matrix[0].length;
  let left = 0,
    right = col - 1,
    top = 0,
    bottom = row - 1;
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    for (let i = top + 1; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    if (top !== bottom) {
      for (let i = right - 1; i >= left; i--) {
        res.push(matrix[bottom][i]);
      }
    }
    if (left !== right) {
      for (let i = bottom - 1; i > top; i--) {
        res.push(matrix[i][left]);
      }
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  return res;
};
