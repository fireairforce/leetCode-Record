/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  const dfs = (nums, k, resTemp, res) => {
    if (resTemp.length <= nums.length) {
      res.push([...resTemp]);
    }
    for (let i = k; i < nums.length; i++) {
      if (i !== k && nums[i] === nums[i - 1]) {
        continue;
      }
      resTemp.push(nums[i]);
      dfs(nums, i + 1, resTemp, res);
      resTemp.pop();
    }
  };
  dfs(nums, 0, [], res);
  return res;
};
// console.log(subsetsWithDup([1,2,2]));
