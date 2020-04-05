/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  let res = []
  let len = nums.length
  let sum = 0
  for (let i = 0; i < len; i++) {
    sum += nums[i]
  }
  nums.sort((a, b) => b - a)
  let sum1 = 0
  let k = -1;
  for (let i = 0; i < len; i++) {
    sum1 += nums[i]
    if(2 * sum1 > sum ) {
      k = i
      break
    }
  }
  let result = []
  for(let i = 0;i<=k;i++) {
    result.push(nums[i])
  }
  return result;
}

// console.log(minSubsequence([4,4,7,6,7]));
// console.log(minSubsequence([4,3,10,9,8]));
// console.log(minSubsequence([6]));
