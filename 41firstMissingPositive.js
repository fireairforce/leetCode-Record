// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var firstMissingPositive = function (nums) {
//     // 过滤非正整数
//     nums = nums.filter(v => v > 0);
//     if (nums.length === 0) {
//         return 1;
//     }
//     nums.sort((a, b) => {
//         return a - b
//     });
//     if (nums[0] !== 1) {
//         return 1;
//     } else {
//         for (let i = 0; i < nums.length - 1; i++) {
//            if(nums[i+1]-nums[i]>1){
//                return nums[i] + 1;
//            }
//         }
//         return nums.pop() + 1;
//     }
//  };
// console.log(firstMissingPositive([1, 2, 0]))

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    // 过滤非正整数
    nums = nums.filter(v => v > 0);
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length ; j++) {
            if (nums[j] < nums[i]) {
                let c = nums[i];
                nums[i] = nums[j];
                nums[j] = c;
            }
        }
        let min = nums[i];
        if (i > 0) {
            if (nums[i] - nums[i - 1] > 1) {
                return nums[i - 1] + 1;
            }
        } else {
            if (min !== 1) {
                return 1;
            }
        }
    }
    return nums.length ? nums.pop() + 1 : 1
};
console.log(firstMissingPositive([3,4,-1,1]));