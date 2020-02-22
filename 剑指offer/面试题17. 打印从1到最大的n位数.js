/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
  let i = 1
  let res = []
  while ((i + '').length <= n) {
    res.push(i)
    i++
  }
  return res
}
