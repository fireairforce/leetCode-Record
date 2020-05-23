arr = [1, 2,4, 1, 7, 8,3  ]
const solve = (arr) => {
  const dp = Array(arr.length).fill(0)
  dp[0] = arr[0]
  dp[1] = Math.max(arr[0], arr[1])
  for (let i = 2; i < arr.length; i++) {
    dp[i] = Math.max(dp[i - 1], arr[i] + dp[i - 2])
  }
  return dp[arr.length - 1]
}
console.log(solve(arr))
