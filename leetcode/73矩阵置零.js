/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let row = matrix.length;
  if (row < 0) {
    return matrix;
  }
  let col = matrix[0].length;
  let colArr = [];
  let rowArr = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === 0 && (colArr.indexOf(i)===-1 || rowArr.indexOf(j)===-1)) {
        colArr.push(i);
        rowArr.push(j);
      }
    }
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if(colArr.indexOf(i)===-1 && rowArr.indexOf(j)===-1) {
        continue;
      } else {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};

// console.log(setZeroes(
//   [
//     [1,1,1],
//     [1,0,1],
//     [1,1,1]
//   ]
// ));