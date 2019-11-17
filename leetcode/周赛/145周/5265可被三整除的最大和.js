/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
  nums.sort((a, b) => a - b);
  let arr1 = nums.filter((item) => item % 3 === 1);
  let arr2 = nums.filter((item) => item % 3 === 2);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  if (sum % 3 === 0) {
    return sum;
  } else if (sum % 3 === 1) {
    sum = Math.max(sum - arr1[0], (sum - arr2[0] - arr2[1]) | 0);
  } else {
    sum = Math.max(sum - arr2[0], (sum - arr1[0] - arr1[1]) | 0);
  }
  return sum;
};
