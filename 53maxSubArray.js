// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let res = nums[0],sum = 0;
// for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     res = Math.max(sum, res);
//     if (sum < 0) {
//          sum = 0; 
//     }
// }
// console.log(res);
/**
 * @param {number[]} nums
 * @return {number}
 */
//  本质上这是个动态规划的问题
var maxSubArray = function(nums) {
    let res = nums[0],sum = 0;
    for(let i = 0;i<nums.length;i++){
        sum += nums[i];
        res = Math.max(sum,res);
        if(sum<0){
            sum = 0;
        }
    }
    return res;
};