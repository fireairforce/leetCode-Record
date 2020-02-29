/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  s = s.split('')
  let res = []
  const dfs = (s, tempList, visited) => {
    if (tempList.length === s.length) {
      res.push([...tempList])
      return
    }
    for (let i = 0; i < s.length; i++) {
      if (visited[i]) {
        continue
      }
      if (i > 0 && s[i] === s[i - 1] && visited[i - 1]) {
        continue
      }
      visited[i] = true
      tempList.push(s[i])
      dfs(s, tempList, visited)
      visited[i] = false
      tempList.pop()
    }
  }
  dfs(
    s.sort((a, b) => a - b),
    [],
    [],
  )
  for (let i = 0; i < res.length; i++) {
    res[i] = res[i].join('')
  }
  return Array.from(new Set(res))
}

// permutation("suvyls")
