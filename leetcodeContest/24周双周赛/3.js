/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
  let res = ['a', 'b', 'c']
  for (let i = 1; i < n; i++) {
    let temp = []
    for (let j = 0; j < res.length; j++) {
      if (res[j][res[j].length - 1] === 'a') {
        temp.push(res[j] + 'b', res[j] + 'c')
      } else if (res[j][res[j].length - 1] === 'b') {
        temp.push(res[j] + 'a', res[j] + 'c')
      } else if (res[j][res[j].length - 1] === 'c') {
        temp.push(res[j] + 'a', res[j] + 'b')
      }
    }
    res = temp
  }
  res.sort((a, b) => {
    return a.localeCompare(b)
  })
  if (res.length < k) {
    return ''
  } else {
    return res[k - 1]
  }
}

