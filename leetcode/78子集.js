/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 回溯
var subsets = function(nums) {
  const list = [];
  dfs(list, [], 0, nums);
  return list;
};

const dfs = (list, tempList, start, nums) => {
  list.push([...tempList]);
  for (let i = start; i < nums.length; i++) {
    tempList.push(nums[i]);
    dfs(list, tempList, i + 1, nums);
    tempList.pop();
  }
};
