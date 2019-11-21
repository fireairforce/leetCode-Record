/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const list = [];
  backtrack(
    list,
    [],
    candidates.sort((a, b) => a - b),
    target,
    0,
  );
  return list;
};

const backtrack = (list, tempList, nums, remain, start) => {
  if (remain < 0) {
    return;
  } else if (remain === 0) {
    return list.push([...tempList]);
  }
  for (let i = start; i < nums.length; i++) {
    tempList.push(nums[i]);
    // 　　　这里start为i表示数字可以重复使用，如果为i + 1表示不能重复使用
    backtrack(list, tempList, nums, remain - nums[i], i);
    tempList.pop();
  }
};
