/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
  if (z === 0) {
    return true
  }
  if (x + y < z) {
    return false
  }
  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b)
  }
  let gcdValue = gcd(x, y)
  return z % gcdValue === 0
}

console.log(canMeasureWater(3, 5, 4))
console.log(canMeasureWater(2, 6, 5))
