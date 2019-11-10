/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const list = [];
  dfs(list, nums.sort((a, b) => a - b), [], []);
  return list;
};

const dfs = (list, nums, tempList, visited) => {
  if (tempList.length === nums.length) {
    return list.push([...tempList]);
  }
  for (let i = 0; i < nums.length; i++) {
    if (visited[i]) {
      continue;
    }
    if (i > 0 && nums[i] === nums[i - 1] && visited[i - 1]) continue;
    visited[i] = true;
    tempList.push(nums[i]);
    dfs(list, nums, tempList, visited);
    visited[i] = false;
    tempList.pop();
  }
};
