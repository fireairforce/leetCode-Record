/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
  let res = 0;
  let count = 0;
  const rows = grid.length;
  if (rows === 0) {
    return 0;
  }
  let cols = grid[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        res++;
      }
    }
    if (res === 1) {
      res = 0;
    }
    count += res;
    res = 0;
  }
  res = 0;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[j][i] === 1) {
        res++;
      }
    }
    if (res === 1) {
      res = 0;
    }
    count = count + res;
    res = 0;
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (judge(grid, i, j, rows, cols) === true && grid[i][j] === 1) {
        // console.log(i, j);
        count--;
      }
    }
  }
  return count;
};
const judge = (grid, i, j, rows, cols) => {
  let flag1 = false;
  let flag2 = false;
  for (let m = 0; m < rows; m++) {
    if (grid[m][j] === 1 && m !== i) {
      flag2 = true;
    }
  }
  for (let m = 0; m < cols; m++) {
    if (grid[i][m] === 1 && m !== j) {
      flag1 = true;
    }
  }

  if (flag1 === true && flag2 === true) {
    return true;
  } else {
    return false;
  }
};
// console.log(
//   countServers([[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]))
