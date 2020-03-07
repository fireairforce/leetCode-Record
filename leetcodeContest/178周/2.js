/**
 * @param {string[]} votes
 * @return {string}
 */
/**
队伍最多有26个，且用大写字母表示，故创建一个二维数组[26]*[n]（n就是实际参加的队伍个数加1），用来存储这26个队伍的排名数据。如：有3个队伍，分别为A，B，C，那么n就是4，[0][0]表示A队获得‘排位第一’的票数，[0][1]表示A队获得’排位第二‘的票数，以此类推。。。最后的[0][4]表示A队的编号，用于字母顺序排序。
再将这个二维数组降序排序，得到的数组就是我们希望的结果。
 */
var rankTeams = function(votes) {
  let count = []
  let len = votes[0].length
  for (let i = 0; i < 30; i++) {
    count[i] = []
    for (let j = 0; j < len; j++) {
      count[i][j] = 0
    }
  }
  for (let i = 0; i < votes.length; i++) {
    for (let j = 0; j < len; j++) {
      count[votes[i][j].charCodeAt() - 'A'.charCodeAt()][j]++
    }
  }
  let ans = votes[0].split('')
  ans.sort((a, b) => {
    let tempA = a.charCodeAt() - 'A'.charCodeAt()
    let tempB = b.charCodeAt() - 'A'.charCodeAt()
    for (let i = 0; i < len; i++) {
      if (count[tempA][i] > count[tempB][i]) {
        return -1
      } else if (count[tempA][i] === count[tempB][i]) {
        if (i !== len - 1) {
          continue
        } else {
          return tempA - tempB
        }
      } else {
        return 1
      }
    }
  })
  return ans.join('')
}

// console.log(rankTeams(['ABC', 'ACB', 'ABC', 'ACB', 'ACB']))
// console.log(rankTeams(['WXYZ', 'XYZW']))
// console.log(rankTeams(['ZMNAGUEDSJYLBOPHRQICWFXTVK']))
// console.log(rankTeams(['BCA', 'CAB', 'CBA', 'ABC', 'ACB', 'BAC']))
// console.log(rankTeams(['M', 'M', 'M', 'M']))
