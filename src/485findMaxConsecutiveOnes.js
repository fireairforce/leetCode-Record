/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let dp = [],
        sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            dp[i] = 0;
            sum = 0;
        } else {
            sum++;
            dp[i] = sum;
        }
    }
    let min = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < dp.length; i++) {
       if(min<dp[i]){
           min = dp[i];
       }
    }
    return min;
};
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));