arr = [1, 1, 1, 4, 1, 9]
const solve = (arr) => {
  const dp = Array(arr.length).fill(0)
  dp[0] = arr[0]
  dp[1] = arr[1]
  for (let i = 2; i < arr.length; i++) {
    dp[i] = Math.max(dp[i - 1], arr[i] + dp[i - 2])
  }
  return dp[arr.length - 1]
}
console.log(solve(arr));

