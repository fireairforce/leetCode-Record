/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    if (new Set(nums).size === nums.length) {
        return false;
    } else {
        let flag = false;
        for (let i = 0, len = nums.length; i < len - 1; i++) {
            if (nums.indexOf(nums[i], i + 1) > -1 && nums.indexOf(nums[i],i+1)-i<=k) {
                flag = true;
            }
        }
        return flag;
    }

};
// console.log(containsNearbyDuplicate([99,99],3));
// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
// console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));