/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let arr = [];
  for (let i = 0; i < numRows; i++) {
    arr[i] = new Array();
    for (let j = 0; j < i + 1; j++) {
      arr[i][j] = 1;
    }
  }
  for (let i = 2; i < numRows; i++) {
    for (let j = 1; j < i; j++) {
      arr[i][j] = arr[i - 1][j-1] + arr[i - 1][j];
    }
  }
  return arr;
};
// console.log(generate(2));