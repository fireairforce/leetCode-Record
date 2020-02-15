/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//  这个超时了，可能是lastIndexOf有一段的时间限制吧
var threeSum = function(nums) {
    if(nums.length<3){
        return [];
    }
  const result = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let temp = nums[i] + nums[j];
      if (nums.lastIndexOf(-temp) > j) {
        result.push([nums[i], nums[j], nums[nums.indexOf(-temp)]]);
      }
    }
  }
  let a = {};
  for (let i = 0; i < result.length; i++) {
      let item = result[i].sort().toString();
      a[item] = 1;
  }
  let res = [];
  for(let q in a) {
      res.push(q.split(','));
  }
  return res;
};


// console.log(threeSum([1,2,-2,-1]));
