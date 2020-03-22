/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  let res = []
  for (let i = 0;i<nums.length;i++) {
    if(res.length === 0){
      res[index[i]] = nums[i]
    } else {
      if(index[i] >= res.length) {
        res.push(nums[i])
      } else {
        res.splice(index[i], 0 ,nums[i])
      }
    }
  }
  return res;
};

// console.log(createTargetArray([0,1,2,3,4],[0,1,2,2,1]))
// console.log(createTargetArray([1,2,3,4,0],[0,1,2,3,0]))
// console.log(createTargetArray([1],[0]))
