/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let res = nums[0],
    sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    res = Math.max(sum, res);
    if (sum < 0) {
      sum = 0;
    }
  }
  return res;
};
