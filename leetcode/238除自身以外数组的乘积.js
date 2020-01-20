/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 从两边乘过来再过去就行了
var productExceptSelf = function(nums) {
  let len = nums.length;
  let left = 1,
    right = 1;
  let res = Array(nums.length).fill(1);
  for (let i = 0; i < len; i++) {
    res[i] = left;
    left *= nums[i];
  }
  for (let j = len - 1; j >= 0; j--) {
      res[j] *= right;
      right *= nums[j];
  }
  return res;
};
