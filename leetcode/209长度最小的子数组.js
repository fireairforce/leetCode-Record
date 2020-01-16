/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function(s, nums) {
  let j = -1;
  let sum = 0;
  let len = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= s) {
      j++;
      sum -= nums[j];
      if (len === 0) {
        len = i - j + 1;
      } else {
        len = Math.min(len, i - j + 1);
      }
    }
  }
  return len;
};
// console.log(minSubArrayLen(7,[1,2,3,4,2,2]));
