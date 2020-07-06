/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const list = [];
  const backtrack = (tempList, nums, remain, start) => {
    if (remain < 0) {
      return;
    } else if (remain === 0) {
      list.push([...tempList]);
      return 
    }
    for (let i = start; i < nums.length; i++) {
      tempList.push(nums[i]);
      // 　　　这里start为i表示数字可以重复使用，如果为i + 1表示不能重复使用
      backtrack(tempList, nums, remain - nums[i], i);
      tempList.pop();
    }
  };
  backtrack(
    [],
    candidates.sort((a, b) => a - b),
    target,
    0,
  );
  return list;
};
