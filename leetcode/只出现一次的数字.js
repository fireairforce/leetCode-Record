/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = 0;
  }
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]]++;
  }
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === 1) {
      return nums[i];
    }
  }
};
