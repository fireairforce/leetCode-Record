/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let len = nums.length;
  if (len <= 1) {
    return 0;
  }
  let high = 0,
    low = len - 1,
    max = nums[0],
    min = nums[len - 1];
  for (let i = 1; i < len; i++) {
    max = Math.max(max, nums[i]);
    min = Math.min(min, nums[len - i - 1]);
    if (nums[i] < max) {
      high = i;
    }
    if (nums[len - i - 1] > min) {
      low = len - 1 - i;
    }
  }
  return high > low ? high - low + 1 : 0;
};
