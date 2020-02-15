/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  if (M === null || M.length === 0 || M[0].length === 0) {
    return 0;
  }
  let n = M.length;
  let numCircles = 0;
  let flag = [];
  for (let i = 0; i < n; i++) {
    flag[i] = 0;
  }
  for (let i = 0; i < n; i++) {
    if (flag[i]===0) {
      dfs(M, i, flag, n);
      numCircles++;
    }
  }
  return numCircles;
};

const dfs = (M, i, flag, n) => {
  for (let j = 0; j < n; j++) {
    if (M[i][j] === 1 && flag[j]===0) {
      flag[j] = 1;
      dfs(M, j, flag, n);
    }
  }
};
