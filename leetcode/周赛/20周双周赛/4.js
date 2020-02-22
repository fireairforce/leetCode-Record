/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function(n) {
  let mod = 1e9 + 7
  let dp = Array(n + 1).fill(0)
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] * fact(2 * i, 2)) % mod
  }
  return dp[n] % mod
}

let gcd = (a, b) => {
  return b == 0 ? a : gcd(b, a % b)
}
let fact = (x, y) => {
  let i, j, l, r
  if (x == 0 || y == 0) return 1
  y = Math.min(y, x - y)
  for (i = 1, l = 1, r = 1; i <= y; i++) {
    l = l * (x - i + 1)
    r = r * i
    let xx = gcd(l, r)
    if (xx < 0) xx = -xx
    l /= xx
    r /= xx
  }
  if (r > 1) l /= r
  return l
}

// console.log(countOrders(3))
