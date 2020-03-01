var rankTeams = function(votes) {
  if (votes.length === 0) return ''

  let map = [],
    ans = votes[0].split('')
  for (let i = 0; i < votes.length; i++) {
    let every = votes[i]
    let rank = 1
    for (let j = 0; j < every.length; j++) {
      if (map[rank] === undefined) map[rank] = {}
      let c = every.charAt(j)
      if (map[rank][c] === undefined) {
        map[rank][c] = 1
      } else {
        map[rank][c]++
      }
      rank++
    }
  }
  ans.sort((a, b) => {
    let rank = 1,
      res = 0
    while (res === 0) {
      if (map[rank] === undefined) {
        if (a < b) res = -1
        if (a > b) res = 1
      } else {
        let l = map[rank][a] || 0,
          r = map[rank][b] || 0
        if (l > r) res = -1
        if (l < r) res = 1
      }
      rank++
    }
    return res
  })
  return ans.join('')
}
