/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let sum = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      nums[i] = nums[i-1];
      sum++;
    }
  }
  if (sum <= 1) {
    return true
  } else return false;
};

// console.log(checkPossibility([4,2,3]));