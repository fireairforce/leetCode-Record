/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function(upper, lower, colsum) {
  let arr = [];
  for (let i = 0; i < 2; i++) {
    arr[i] = new Array();
    for (let j = 0; j < colsum.length; j++) {
      arr[i][j] = 0;
    }
  }
  //   先把这两种情况处理掉
  for (let i = 0; i < colsum.length; i++) {
    if (colsum[i] === 2) {
      arr[0][i] = 1;
      arr[1][i] = 1;
    } else if (colsum[i] === 1) {
      arr[0][i] = 1;
      arr[1][i] = 0;
    }
  }
  let sum = [];
  sum[0] = 0;
  sum[1] = 0;
  for (let i = 0; i < colsum.length; i++) {
    sum[0] += arr[0][i];
    sum[1] += arr[1][i];
  }
  for (let i = 0; i < colsum.length; i++) {
    if (sum[0] > upper && colsum[i] === 1) {
      arr[0][i] = 0;
      arr[1][i] = 1;
      sum[0]--;
      sum[1]++;
    } else if (sum[0] < upper && colsum[i] === 1) {
      arr[0][i] = 1;
      arr[1][i] = 0;
      sum[0]++;
      sum[1]++;
    }
    if (sum[0] === upper) {
      break;
    }
  }
  if (sum[0] === upper && sum[1] === lower) {
    return arr;
  } else {
    return [];
  }
};
