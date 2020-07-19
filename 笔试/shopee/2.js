var s = readline()
if (!s || s.length === 0) {
  print(0)
}
var res = s[0]
var dp = []
for (var i = s.length; i >= 0; i--) {
  dp[i] = []
  for (var j = i; j < s.length; j++) {
    if (j === i) {
      dp[i][j] = true
    } else if (j - i === 1 && s[j] === s[i]) {
      dp[i][j] = true
    } else if (s[i] === s[j] && dp[i + 1][j - 1]) {
      dp[i][j] = true
    }
    if (dp[i][j] && j - i + 1 > res.length) {
      res = s.slice(i, j + 1)
    }
  }
}
print(res.length)

