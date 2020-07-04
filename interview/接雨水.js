const solve = (height) => {
  let left = []
  let right = []
  let max = 0;
  let len = height.length
  for (let i = 0; i < len; i++) {
    left[i] = max = Math.max(max, height[i])
  }
  max = 0
  for (let i = len - 1; i >= 0; i--) {
    right[i] = max = Math.max(max, height[i])
  }
  let res = 0
  for (let i = 0; i < len; i++) {
    res += (Math.min(left[i], right[i]) - height[i])
  }
  return res;
}