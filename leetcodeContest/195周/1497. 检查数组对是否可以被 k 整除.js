/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
  let mod = Array(k).fill(0)
  for (let item of arr) {
    mod[(item % k + k) % k] ++;
  }
  for (let i = 1; i <= k/2; i++) {
    if (mod[i] !== mod[k-i]) {
      return false;
    }
  }
  return mod[0] % 2 === 0;
};