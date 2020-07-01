/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(nums.length < 2) {
        return nums.length;
    }
    // 找一个中间变量对值进行记录一下就行了
    let max = 1;
    let count = 1;
    for(let i = 1;i<nums.length;i++){
        if(nums[i]>nums[i-1]){
            count ++;
            if(count > max) {
                max = count;
            }
        } else {
            count = 1;
        }
    }
    return max;
};
