// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maximumGap = function (nums) {
//     if (nums.length < 2) {
//         return 0;
//     }
//     let max = 0;
//     for (let i = nums.length - 1; i > 0; i--) {
//         for (let j = 0; j < i; j++) {
//             let temp = nums[j];
//             if (temp > nums[j + 1]) {
//                 nums[j] = nums[j + 1];
//                 nums[j + 1] = temp;
//             }
//         }
//         if (i < nums.length - 1) {
//             let space = nums[i + 1] - nums[i];
//             if (space > max) {
//                 max = space;
//             }
//         }
//     }
//     return Math.max(max, nums[1] - nums[0]);
// };
// console.log(maximumGap([3, 6, 9, 1]));


/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
    if (nums.length < 2) {
        return 0;
    }
    nums.sort((a, b) => {
        return a - b;
    })
    let max = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] > max) {
            max = nums[i] - nums[i - 1];
        }
    }
    return max;
};
console.log(maximumGap([3, 6, 9, 1]));