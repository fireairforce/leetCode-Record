/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if (nums === null || nums.length <= 1) {
    return;
  }
  let i = nums.length - 2;
  while (i > -1 && nums[i + 1] <= nums[i]) {
    i--;
  }
  if (i > -1) {
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  reverse(nums, i + 1, nums.length - 1);
};

const reverse = (nums, i, j) => {
  while (i < j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    i++;
    j--;
  }
};
