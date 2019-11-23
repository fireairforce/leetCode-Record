/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let max = nums[0];
  let temp = null;
  for (let i = 0; i < nums.length; i++) {
    temp = nums[i];
    max = Math.max(temp, max);
    for (let j = i + 1; j < nums.length; j++) {
      temp *= nums[j];
      max = Math.max(max, temp);
    }
  }
  return max;
};
