/**
 * @param {number} n
 * @return {number}
 */
// 完全背包问题
var integerBreak = function(n) {
  if (n === 2) {
    return 1
  }
  if (n === 3) {
    return 2
  }
  let temp = []
  for (let i = 1; i <= n; i++) {
    temp.push(i)
  }
  let v = Array.fill(temp.length + 1, -100)
  v[0] = 1
  for (let i = 0; i < n; i++) {
    for (let j = temp[i]; j <= n; j++) {
      v[j] = Math.max(v[j], v[j - temp[i]] * temp[i])
    }
  }
  return v[temp.length]
}
