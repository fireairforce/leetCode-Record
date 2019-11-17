/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
  let cols = grid.length;
  let rows = grid[0].length;
  let res = [];
  for (let i = 0; i < cols; i++) {
    res[i] = new Array();
    for (let j = 0; j < rows; j++) {
      res[i][j] = 0;
    }
  }
  let tempArr = flattern(grid);
  for (let i = 0; i < k; i++) {
    let x = tempArr.pop();
    tempArr.unshift(x);
  }
  let m = 0;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      res[i][j] = tempArr[m];
      m++;
    }
  }
  console.log(res);
};

const flattern = (arr) => {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
};

// shiftGrid(
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ],
//   9,
// );
