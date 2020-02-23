/**
 * @param {number} num
 * @return {number[]}
 */
var closestDivisors = function(num) {
  let min = Number.MAX_SAFE_INTEGER
  let res = []
  for (let i = 1; i <= Math.floor(Math.sqrt(num + 2)); i++) {
    let j, k
    if ((num + 1) % i === 0) {
      j = Math.ceil((num + 1) / i)
    }
    if ((num + 2) % i === 0) {
      k = Math.ceil((num + 2) / i)
    }
    if (Math.abs(i - j) < min) {
      min = Math.abs(i - j)
      res = [i, j]
    }
    if (Math.abs(i - k) < min) {
      min = Math.abs(i - k)
      res = [i, k]
    }
  }
  return res
}
// console.log(closestDivisors(123))
