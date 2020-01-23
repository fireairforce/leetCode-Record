/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res[i] = new Array();
    for (let j = 0; j < n; j++) {
      res[i][j] = 0;
    }
  }
  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1,
    sum = 1;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      res[top][i] = sum ++;
    }
    for (let i = top + 1; i <= bottom; i++) {
      res[i][right] = sum ++;
    }
    if (top !== bottom) {
      for (let i = right - 1; i >= left; i--) {
        res[bottom][i] = sum ++;
      }
    }
    if (left !== right) {
      for (let i = bottom - 1; i > top; i--) {
        res[i][left] = sum ++;
      }
    }
    left ++;
    top ++;
    bottom --;
    right --;
  }
  return res;
};

// generateMatrix(3);
