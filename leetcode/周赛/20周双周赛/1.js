/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
  var hammingWeight = function(n) {
    let sum = 0
    for (let i = 0; i < 32; i++) {
      sum += n & 1
      n = n >> 1
    }
    return sum
  }
  return arr.sort((a, b) => {
    if (hammingWeight(a) === hammingWeight(b)) {
      return parseInt(a) - parseInt(b)
    }
    return hammingWeight(a) - hammingWeight(b)
  })
}
