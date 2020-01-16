/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

 /**
  * 左下角等于目标，找到
  * 左下角大于目标,往上走
  * 左下角小于目标，往右走
  */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) {
    return false;
  }
  let m = 0;
  let n = matrix[0].length - 1;
  while (m < matrix.length && n >= 0) {
    if (matrix[m][n] == target) {
      return true;
    } else if (matrix[m][n] > target) {
      n--;
    } else {
      m++;
    }
  }
  return false;
};
