/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = 0;
  let dp = [];
  for (let i = 0; i < nums.length; i++) {
    if(sum<0){
      sum = 0;
    }
    sum += nums[i];
    dp.push(sum);
  }
  return dp.sort((a,b)=>b-a)[0];
};
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
// console.log(maxSubArray([1,2,5,-7,8,-10,13]));
