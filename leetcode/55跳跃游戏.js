/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let privot = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= privot) {
      privot = i;
    }
  }
  return privot === 0;
};
