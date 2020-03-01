/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
  if (nums.length % k !== 0 || nums.length < k) {
    return false;
  }
  nums.sort((a, b) => a - b);
  while (nums.length > 0) {
    let temp = nums.shift();
    for (let i = 1; i < k; i++) {
      let nf = temp + i;
      let ip = nums.indexOf(nf);
      if (ip === -1) {
        return false;
      }
      nums.splice(ip, 1);
    }
  }
  return true;
};
