/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  let mod = 1e9 + 7
  let arr = Array(n + 1).fill(0)
  arr[0] = 0
  arr[1] = 1
  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % mod
  }
  return arr[n]
}
