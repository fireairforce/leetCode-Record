/**
 * @param {string[][]} favoriteCompanies
 * @return {number[]}
 */
var peopleIndexes = function (a) {
  let map = new Map()
  let hash = {}
  let arr = []
  for (let i = 0; i < a.length; i++) {
    let str = a[i].join('-')
    arr.push(str)
  }
  let res = []
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i].split('-')
    let index = 0
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue
      }
      for (let k = 0; k < item.length; k++) {
        if (arr[j].indexOf(item[k]) === -1) {
          index ++
          break
        }
      }
    }
    if (index === arr.length - 1) {
      res.push(i)
    }
  }
  return res
}

console.log(
  peopleIndexes([
    ['leetcode', 'google', 'facebook'],
    ['google', 'microsoft'],
    ['google', 'facebook'],
    ['google'],
    ['amazon'],
  ]),
)
