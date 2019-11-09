/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let sum = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] >= nums[i - 1]) {
      continue;
    }
    sum++;
    if (i > 1 && nums[i - 2] > nums[i]) {
      nums[i] = nums[i - 1];
    } else {
      nums[i - 1] = nums[i];
    }
  }
  return sum <= 1;
};
// console.log(checkPossibility([3,4,2,3]));