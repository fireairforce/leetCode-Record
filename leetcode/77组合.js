/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let res = [];
  if (n <= 0 || k <= 0 || n < k) {
    return res;
  }
  dfs(n, k, 1, [], res);
  return res;
};
const dfs = (n, k, start, pre, res) => {
  if (pre.length === k) {
    return res.push([...pre]);
  }
  for (let i = start; i <= n; i++) {
    pre.push(i);
    dfs(n, k, i + 1, pre, res);
    pre.pop();
  }
};
combine(4, 2);
