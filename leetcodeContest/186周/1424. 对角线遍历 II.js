/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function (a) {
  if (a.length === 0) {
    return []
  }
  const arr = [],
    res = []
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (!arr[i + j]) {
        arr[i + j] = []
      }
      arr[i + j].push(a[i][j])
    }
  }
  for (const rows of arr) {
    res.push(...rows.reverse())
  }
  return res
}
