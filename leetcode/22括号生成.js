/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = "";
  bfs(res, "", 0, 0, n);
};
// l统计(的数目,r统计)的数目
const bfs = (res, str, l, r, n) => {
  // 注意这里也要边界上限定r>l
  if (l > n || r > n || r > l) {
    return;
  }
  if (l === n && r === n) {
    res.push(str);
    return;
  }
  bfs(res, str + "(", l + 1, r, n);
  bfs(res, str + ")", l, r + 1, n);
  return;
};
