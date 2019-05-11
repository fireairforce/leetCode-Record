/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let flag = [];
    for (let i = 1; i <= nums.length; i++) {
        if (nums.indexOf(i) === -1) {
           flag.push(i);
        }
    }
    return [...new Set(flag)]
};
// console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));