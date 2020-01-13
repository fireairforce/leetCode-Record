/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const list = [];
  backtrack(
    list,
    [],
    candidates.sort((a, b) => a - b),
    target,
    0,
  );
  for (let i = 0; i < list.length; i++) {
    list[i] = list[i].split("#");
  }
  return list;
};

const backtrack = (list, tempList, nums, remain, start) => {
  if (remain < 0) {
    return;
  } else if (remain === 0) {
    let res = [...tempList].join("#");
    if (list.indexOf(res) === -1) {
      return list.push(res);
    }
  }
  for (let i = start; i < nums.length; i++) {
    tempList.push(nums[i]);
    // 　　　这里start为i表示数字可以重复使用，如果为i + 1表示不能重复使用
    backtrack(list, tempList, nums, remain - nums[i], i + 1);
    tempList.pop();
  }
};
