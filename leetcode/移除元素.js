/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let len = nums.length;
    let count = 0;
    for(i = 0;i< len;i++) {
        if(nums[i] === val) {
            count ++;
        }
    }
    return len - count;
 };