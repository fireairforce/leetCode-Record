/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let res = [];
  if (nums.length <= 3) {
    return res;
  }
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        let temp = [];
        if (nums.lastIndexOf(target - sum) > k) {
          temp = [nums[i], nums[j], nums[k], nums[nums.indexOf(target - sum)]];
          temp = temp.join('#');
          if(res.indexOf(temp)===-1){
              res.push(temp);
          }
        }
      }
    }
  }
   for(let i = 0;i<res.length;i++){
       res[i] = res[i].split('#');
   }
   return res;
};

console.log(fourSum([-3,-2,-1,0,0,1,2,3],0));
