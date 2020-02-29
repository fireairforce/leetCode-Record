/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let sum = 0
    let mul = 1
    let left = n
    let right = 0
    if (!n) {
      return 0
    }
    while (left > 0) {
      let digit = left % 10
      left = Math.floor(left / 10)
      if (digit === 1) {
        sum += left * mul
        sum += right + 1
      } else if (digit < 1) {
        sum += left * mul
      } else {
        sum += (left + 1) * mul
      }
      right += digit * mul
      mul *= 10
    }
    return sum
  }
  