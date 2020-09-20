var maxSumRangeQuery = function (nums, requests) {
  let len = nums.length
  let f = Array(len + 1).fill(0)
  for (let item of requests) {
    f[item[0]]++
    f[item[1] + 1]--
  }
  for (let i = 1; i <= len; i++) {
    f[i] += f[i - 1]
  }
  f.sort((a, b) => b - a)
  nums.sort((a, b) => b - a)
  
  let sum = 0;
  const mod = 1e9 + 7;
  for (let i = 0;i<len;i++) {
    sum += (f[i] * nums[i] % mod) % mod;
  }
  return sum % mod;
}

// console.log(maxSumRangeQuery([1,8,5,5,2],
//   [[4,4],[3,4],[4,4],[2,4],[0,0]]));
// 21596658283
// 预期：
// 596658136
