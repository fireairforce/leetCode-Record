/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const list = [];
  dfs(list, [], nums);
  return list;
};

// 直接回溯就可以了
const dfs = (list, tempList, nums) => {
  if (tempList.length === nums.length) {
    return list.push([...tempList]);
  }
  for (let i = 0; i < nums.length; i++) {
    if (tempList.includes(nums[i])) {
        // 如果tempList里面已经包含了这个元素
      continue;
    }
    // 如果tempList里面没有这个元素,放进去就好了
    tempList.push(nums[i]);
    // 回溯
    dfs(list, tempList, nums);
    // 回溯完成之后把当前这个值pop出去
    tempList.pop();
  }
};

console.log(permute([1,2,3]));
