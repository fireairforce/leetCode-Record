/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0;i<nums.length;i++){
        let matchId = nums.indexOf(target-nums[i]);
        if(matchId!==-1&&matchId !==i){
            return [i,nums.indexOf(target-nums[i])]
        }
    }
    return null;
  };
  