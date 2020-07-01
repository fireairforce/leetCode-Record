const solve = (arr) => {
  let len = arr.length
  let dp = Array(len).fill(0)
  dp[0] = arr[0]
  for (let i = 1;i<len;i++) {
    dp[i] = Math.max(arr[i], arr[i] + dp[i-1])
  }
  return Math.max(...dp)
}