const getNofM = (arr, target) => {
  let res = []
  let len = arr.length
  arr.sort((a, b) => a - b)
  const backtrack = (list, remain, start) => {
    if (remain < 0) {
      return;
    } else if (remain === 0) {
      res.push([...list])
      return;
    }
    for (let i = start; i < len; i++) {
      list.push(arr[i])
      // 要是不要重复的元素的话，这里用 i + 1就可以了
      backtrack(list, remain - arr[i], i + 1)
      list.pop()
    }
  }
  backtrack(
    [],
    target,
    0
  )
  // 不要重复元素的话，手动拉出来去一下重就可以了
  return res;
}

console.log(getNofM([10,1,2,7,6,1,5], 8));