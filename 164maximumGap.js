/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if(nums.length<2){
        return 0;
    }
    nums.sort((a,b)=>{
        return a-b;
    })
    let dp = [];
    dp[0] = 0;
    for(let i = 1;i<nums.length;i++){
       dp[i] = nums[i] - nums[i-1];
    }
    let min = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < dp.length; i++) {
       if(min<dp[i]){
           min = dp[i];
       }
    }
    return min;
};
// console.log(maximumGap([3,6,9,1]));