/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
// 和为n的k个数的组合
var combinationSum3 = function(k, n) {
  let res = [];
  const dfs = (n, res, k, temp, i) => {
    if (n < 0) {
      return;
    }
    if (k === 0) {
      if (n === 0) {
        res.push([...temp]);
      }
      return;
    }
    for (let j = i + 1; j <= 9; j++) {
      temp.push(j);
      dfs(n - j, res, k - 1, temp, j);
      temp.pop();
    }
    return;
  };
  dfs(n, res, k, [], 0);
  return res;
};
