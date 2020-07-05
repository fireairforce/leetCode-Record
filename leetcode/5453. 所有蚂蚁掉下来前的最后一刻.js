/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function (n, left, right) {
  let max1 = 0;
  for (let i = 0; i < left.length; i++) {
    max1 = Math.max(Math.abs(-left[i]), max1)
  }
  let max2 = 0;
  for (let item of right) {
    max2 = Math.max(Math.abs(n - item), max2)
  }
  return Math.max(max1, max2)
};