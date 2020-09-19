var maxSumRangeQuery = function(nums, requests) {
  const mod = 1e9 + 7;
  let c = Array(100005).fill(0)
  let left = Array(100005).fill(0)
  let right = Array(100005).fill(0)
  nums = nums.sort((a, b) => a - b)
  let m = 0;
  let count = 0;
  for (let item of requests) {
    left[item[0]] ++
    right[item[1]] ++
    m = Math.max(m, item[1])
  }
  for (let i = 0;i<=m;i++) {
    if (left[i]) {
      count += left[i]
    }
    c[i] += count
    if (right[i]) {
      count -= right[i]
    }
  }
  c = c.sort((a, b) => b - a)
  let sum = 0;
  let len = nums.length - 1;
  for (let i = 0;i<=m;i++) {
    if (c[i] === 0) {
      break;
    } 
    sum += (c[i] * nums[len] % mod) % mod
    len--;
  }
  return sum % mod;
};


// console.log(maxSumRangeQuery([1,8,5,5,2],
//   [[4,4],[3,4],[4,4],[2,4],[0,0]]));
// 21596658283
// 预期：
// 596658136