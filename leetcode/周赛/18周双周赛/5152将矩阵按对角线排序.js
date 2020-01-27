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
  // r为行,c为列
  for (let i = 0; i < row * col; i++) {
    res[index].push(mat[r][c]);
    //  偶数情况
    if (index % 2 === 0) {
      if (r === row - 1 && c !== col - 1) {
        c++;
        index++;
      } else if (c === col - 1) {
        r--;
        index++;
      } else {
        r++;
        c++;
      }
    } else {
      // 奇数情况
      if (c === 0 && r !== 0) {
        r--;
        index++;
      } else if (r === 0) {
        c++;
        index++;
      } else {
        r--;
        c--;
      }
    }
  }
  for (let i = 0; i < res.length; i++) {
    if (i % 2 === 0) {
      res[i] = res[i].sort((a, b) => a - b);
    } else {
      res[i] = res[i].sort((a, b) => b - a);
    }
  }
  res = newArr(res);
  r = row - 1;
  c = 0;
  index = 0;
  // r为行,c为列
  for (let i = 0; i < row * col; i++) {
    mat[r][c] = res[i];
    //  偶数情况
    if (index % 2 === 0) {
      if (r === row - 1 && c !== col - 1) {
        c++;
        index++;
      } else if (c === col - 1) {
        r--;
        index++;
      } else {
        r++;
        c++;
      }
    } else {
      // 奇数情况
      if (c === 0 && r !== 0) {
        r--;
        index++;
      } else if (r === 0) {
        c++;
        index++;
      } else {
        r--;
        c--;
      }
    }
  }
  // console.log(mat);
  return mat;
};

const newArr = function(arr) {
  return arr.reduce(
    (pre, cur) => pre.concat(Array.isArray(cur) ? newArr(cur) : cur),
    [],
  );
};

