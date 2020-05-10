/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
  let fa = Array.fill(1e5 + 10).fill(0)
  let visit = Array.fill(1e5 + 10).fill(0)
  fa[0] = -1;
  for (let item of edges) {
    fa[item[1]] = item[0];
  }
  let ans = 0;
  for (let i = 0;i<hasApple.length;i++) {
    if (!i) {
      continue;
    }
    if (hasApple[i] && !visit[i]) {
      let node = i;
      visit[node] = 1;
      ans ++;
      while (fa[node] !== 0 && !visit[fa[node]]) {
        node = fa[node];
        visit[node] = 1;
        ans ++
      }
    }
  }
  return ans * 2;
}
