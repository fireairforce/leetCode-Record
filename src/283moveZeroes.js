/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    // let sum = 0;
    // for (let i = 0, i1 = nums.length; i < i1; i++) {
    //     if (nums[i] === 0) {
    //         nums.splice(i, 1);
    //         sum++;
    //         i--;
    //     }
    // }
    // for(let i = 0;i<sum;i++){
    //     nums.push(0);
    // }
    // return nums;
    let i = 0,j = 0;
    for(i=0;i<nums.length;i++){
        if(nums[i]!==0){
            nums[j++] = nums[i];
        } 
    }
    while(j<nums.length){
        nums[j++] = 0;
    }
    return nums;
};
console.log(moveZeroes([0, 0, 1]));
console.log(moveZeroes([0, 1, 0, 3, 12]));