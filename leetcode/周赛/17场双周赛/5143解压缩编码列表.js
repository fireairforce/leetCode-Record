/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let temp = [];
    for(let i = 0,j=0;i<nums.length;i+=2,j++){
       let x = nums[2*j];
       let y = nums[2*j+1];
       for(let k =0;k<x;k++){
           temp.push(y);
       } 
    }
    return temp;
};