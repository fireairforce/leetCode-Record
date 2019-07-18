/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let reverse = (nums, start, end) => {
        while (start < end) {
           let temp = nums[start];
           nums[start++] = nums[end];
           nums[end--] = temp;
        }
    }
    let len = nums.length;
     // 防止k大于数组长度，所以要对其进行一波取余数
     k%=len;
    // 把数组整体翻转
    reverse(nums,0,len-1);
    // 把数组0到k-1的部分翻转
    reverse(nums,0,k-1);
    // 把数组的k到终点处的数组进行翻转
    reverse(nums,k,len-1);
};
