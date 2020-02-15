/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const list = [];
  dfs(list, [], nums);
  return list;
};

const dfs = (list, tempList, nums) => {
  if (tempList.length === nums.length) {
    return list.push([...tempList]);
  }
  for (let i = 0; i < nums.length; i++) {
    if (tempList.includes(nums[i])) {
      continue;
    }
    tempList.push(nums[i]);
    dfs(list, tempList, nums);
    tempList.pop();
  }
};
