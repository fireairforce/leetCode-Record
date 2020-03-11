/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
  let res = ''
  if (n % 2 === 0) {
    res += 'a'
    for (let i = 0; i < n - 1; i++) {
      res += 'b'
    }
  } else {
    for (let i = 0; i < n; i++) {
      res += 'a'
    }
  }
  return res
}
