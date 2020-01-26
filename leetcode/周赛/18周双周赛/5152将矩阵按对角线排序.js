/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
  let res = [];
  let row = mat.length;
  let col = mat[0].length;
  if (col === 1 || row === 1) {
    return mat;
  }
  for (let i = 0; i < row + col - 1; i++) {
    res[i] = new Array();
  }
  let r = row - 1,
    c = 0;
  let index = 0;
  for (let i = 0; i < row * col; i++) {
    res[index].push(mat[r][c]);
    if (index < Math.floor((row + col) / 2)) {
      if (index % 2 === 0) {
        if (r === row - 1) {
          c++;
          index++;
        } else if (c === col - 1) {
          r++;
          index++;
        } else {
          r++;
          c++;
        }
      } else {
        if (r === 0) {
          c--;
          index++;
        } else if (c === 0) {
          r--;
          index++;
        } else {
          r--;
          c--;
        }
      }
    } else {
      if (index % 2 !== 0) {
        if (r === row - 1) {
          c++;
          index++;
        } else if (c === col - 1) {
          r++;
          index++;
        } else {
          r++;
          c++;
        }
      } else {
        if (r === 0) {
          c--;
          index++;
        } else if (c === 0) {
          r--;
          index++;
        } else {
          r--;
          c--;
        }
      }
    }
  }
  for (let i = 0; i < res.length; i++) {
    res[i] = res[i].sort((a, b) => a - b);
  }

  // return mat;
};

console.log(
  diagonalSort([
    [3, 3, 1, 1],
    [2, 2, 1, 2],
    [1, 1, 1, 2],
  ]),
);
