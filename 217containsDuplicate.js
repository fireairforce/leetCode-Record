/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return new Set(nums).size!==nums.length
};
// console.log(containsDuplicate([1,2,3,1]));