/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (nums.length < 2) {
    return nums.length;
  }
  let count = 1;
  let max = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
       count ++;
    } else{
        count = 1;
    }
    if(count>max) {
        max = count;
    }
  }
  return max;
};
