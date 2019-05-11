/**
 * @param {number[]} nums
 * @return {number}
 */
//  类似于第一届河北省大学生程序设计竞赛的一个题目
var missingNumber = function (nums) {
   let sum = (nums.length+1)*nums.length/2;
   for(let i = 0;i<nums.length;i++){
       sum -= nums[i];
   }
   return sum;
};
console.log(missingNumber([0]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));