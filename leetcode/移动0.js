/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      i--;
      count++;
    }
  }
  for (let i = 0; i < count; i++) {
    nums.push(0);
  }
  return nums;
};

// console.log(moveZeroes([0,0,1]));
