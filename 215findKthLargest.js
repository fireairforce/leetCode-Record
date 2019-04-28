/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    // return nums.sort((a,b)=>b-a)[k-1]; 最简单的方法
    let len = nums.length - 1;
    //  利用冒泡的思维直接去找冒泡到len-k+1的那个值
    for (let i = len, temp; i > len - k; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
    return nums[len-(k-1)];
};
// console.log(findKthLargest([3,2,1,5,6,4],2));