/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    // 过滤非正整数
    nums = nums.filter(v => v > 0);
    if (nums.length === 0) {
        return 1;
    }
    nums.sort((a, b) => {
        return a - b
    });
    if (nums[0] !== 1) {
        return 1;
    } else {
        for (let i = 0; i < nums.length - 1; i++) {
           if(nums[i+1]-nums[i]>1){
               return nums[i] + 1;
           }
        }
        return nums[nums.length-1] + 1;
    }
};
console.log(firstMissingPositive([1, 2, 0]))