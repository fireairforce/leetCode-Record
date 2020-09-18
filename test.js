// output is [[]]
const solve = (arr) => {
  let len = arr.length
  const res = []
  //
  const dfs = (nums) => {
    // 边界条件
    if (nums.length === len) {
      res.push(nums)
      return
    }
    for (let i = 0; i < len; i++) {
      if (!nums.includes(arr[i])) {
        nums.push(arr[i])
        dfs(nums)
        nums.pop()
      }
    }
  }
  dfs([])
  return res;
}

console.log(solve([1, 2, 3, 4, 5]))
// 1 2 3 4 5

// 1 2 3 5 4

//
