/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length <= 2) {
    return nums.length;
  }
  let index = 2;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[index - 2]) {
      nums[index++] = nums[i];
    }
  }
  return index;
};
