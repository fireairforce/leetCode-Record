//  两数之和
var twoSum = function (nums, target) {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if(nums.indexOf(target-nums[i])>-1&&i!==nums.indexOf(target-nums[i])){
            return [i,nums.indexOf(target-nums[i])]
        }
    }
}
let nums = [3,2,4],target = 6;
console.log(twoSum(nums,target));