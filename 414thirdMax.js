/**
 * @param {number[]} nums
 * @return {number}
 */
//  用三个变量去存最大值和最小值 
var thirdMax = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    } else if (nums.length === 2) {
        return Math.max(nums[0], nums[1]);
    }
    let max1 = Number.MIN_SAFE_INTEGER;
    let max2 = Number.MIN_SAFE_INTEGER;
    let max3 = Number.MIN_SAFE_INTEGER;
    let flag = 0,f=1;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]===Number.MIN_SAFE_INTEGER&&f){
            flag ++;
            f = 0;
        }
        if (nums[i] > max1) {
            flag ++;
            max3 = max2;
            max2 = max1;
            max1 = nums[i];
        } else if(nums[i]>max2&&nums[i]<max1){
            flag ++;
            max3 = max2;
            max2 = nums[i];
        } else if(nums[i]>max3&&nums[i]<max2){
            flag ++;
            max3 = nums[i];
        }
    }
    return flag>=3?max3:max1;
};
console.log(thirdMax([2,2,3,1]));