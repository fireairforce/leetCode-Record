/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = "";
  bfs(res, "", 0, 0, n);
};

const bfs = (res, str, l, r, n) => {
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
