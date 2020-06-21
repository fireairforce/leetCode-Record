/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
  let nums = []
  for (let i = 0;i<n;i++) {
    nums[i] = start + 2 * i;
  }
  let res = 0;
  for (let i = 0;i<nums.length;i++) {
    res = res ^ nums[i]
  }
  return res;
};

// console.log(xorOperation(5, 0));