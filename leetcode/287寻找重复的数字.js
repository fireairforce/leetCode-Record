/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let hashTable = {};
    for(let i = 0;i<nums.length;i++){
        if(hashTable[nums[i]]) {
            hashTable[nums[i]] ++;
        } else {
            hashTable[nums[i]] = 1;
        }
    }
    // console.log(hashTable);
    for(let i in hashTable) {
        if(hashTable[i]>=2) {
           return i;
        }
    }
};

console.log(findDuplicate([1,3,4,2,2]));