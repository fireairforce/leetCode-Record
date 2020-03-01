/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
  if (votes.length === 1) {
    return votes.join('')
  }
  let count = []
  for (let i = 0; i < votes.length; i++) {
    for (let j = 0; j < votes[i].length; j++) {
      count[j] = {}
    }
  }
  for (let i = 0; i < votes.length; i++) {
    votes[i] = votes[i].split('')
    for (let j = 0; j < votes[i].length; j++) {
      if (count[j][votes[i][j]]) {
        count[j][votes[i][j]]++
      } else {
        count[j][votes[i][j]] = 1
      }
    }
  }

  let str = ''
  for (let i = 0; i < count.length; i++) {
    for (let key in count[i]) {
      str += key
    }
  }
  for (let i = 0; i < count.length; i++) {
    let arr = Object.keys(count[i]).sort((a, b) => {
      if (count[i][a] === count[i][b]) {
        return a.charCodeAt() - b.charCodeAt()
      }
      return count[i][b] - count[i][a]
    })
  }
  let res = []
  for (let i = 0; i < count.length; i++) {
    for (let j = 0; j < count[i].length; j++) {
      if (!res.includes(count[i][j])) {
        res.push(count[i][j])
      }
    }
  }
  return res.join('')
}

// console.log(rankTeams(['ABC', 'ACB', 'ABC', 'ACB', 'ACB']))
console.log(rankTeams(['WXYZ', 'XYZW']))
// output XWYZ
// console.log(rankTeams(['ZMNAGUEDSJYLBOPHRQICWFXTVK']))
// console.log(rankTeams(['BCA', 'CAB', 'CBA', 'ABC', 'ACB', 'BAC']))
// console.log(rankTeams(['M', 'M', 'M', 'M']))
