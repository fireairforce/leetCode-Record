//  两数之和
var twoSum = function (nums, target) {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if(nums.indexOf(target-nums[i])>-1&&i!==nums.indexOf(target-nums[i])){
            return [i,nums.indexOf(target-nums[i])]
        }
    }
}
module.exports = twoSum;