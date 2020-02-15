function printMatrix(arr) {
  let row = arr.length;
  let col = arr[0].length;
  let res = [];
  if (row === 0 || col === 0) {
    return res;
  }
  let left = 0,
    right = col - 1,
    top = 0,
    bottom = row - 1;
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(arr[top][i]);
    }
    for (let i = top + 1; i <= bottom; i++) {
      res.push(arr[i][right]);
    }
    if (top !== bottom) {
      for (let i = right - 1; i >= left; i--) {
        res.push(arr[bottom][i]);
      }
    }
    if (left !== right) {
      for (let i = bottom - 1; i > top; i--) {
        res.push(arr[i][left]);
      }
    }
    left++;
    top++;
    right--;
    bottom--;
  }
  return res;
}
