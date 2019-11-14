/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  if (nums.length < 2) {
    return -1;
  }
  for (let i = 0; i < nums.length; i++) {
    let sum1 = 0;
    let sum2 = 0;
    for (let j = 0; j < i; j++) {
      sum1 += nums[j];
    }
    for (let j = i + 1; j < nums.length; j++) {
      sum2 += nums[j];
    }
    if (sum1 === sum2) {
      return i;
    }
  }
  return -1;
};

// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
