/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
  let res = 0
  for (let i = edges.length - 1; i >= 0; i--) {
    if (hasApple[edges[i][1]]) {
      hasApple[edges[i][0]] = true
    }
  }
  for (let i = 0; i < edges.length; i++) {
    if (hasApple[edges[i][1]]) {
      res += 2
    }
  }
  return res
}
