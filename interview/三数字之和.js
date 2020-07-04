const solve = (arr) => {
  if (arr.length < 3) {
    return []
  }
  arr.sort((a, b) => a - b)
  let len = arr.length;
  let res = []
  // 总体时间复杂度是 o(n^2)
  for (let i = 0; i < len; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    let l = i;
    let r = len - 1;
    while (l < r) {
      if (l === i) {
        l++
      } else if (r === i) {
        r--
      } else if (arr[l] + arr[r] + arr[i] === 0) {
        res.push([arr[l], arr[r], arr[i]])
        // 注意跳一下重复的数字喔～
        while (arr[l] === arr[l + 1] && l < r) {
          l++
        }
        l++;
        while (arr[r] === arr[r - 1] && l < r) {
          r--;
        }
        r--
        continue
      } else if (arr[l] + arr[r] + arr[i] > 0) {
        r--;
      } else {
        l++
      }
    }
  }
  return res;
}