/**
 * @param {number[]} nums
 * @return {number}
 */
var splitArray = function (nums) {
  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b)
  }
  
}
