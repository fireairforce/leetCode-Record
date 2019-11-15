/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== i && nums.indexOf(nums[i])!==-1) {
      return true;
    }
  }
  return false;
};

// console.log(containsDuplicate([0]));
