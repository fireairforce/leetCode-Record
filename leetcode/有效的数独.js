/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (a) {
  let m = a.length,
    n = a[0].length
  let map = new Map()
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (a[i][j] !== '.') {
        if (map.has(a[i][j])) {
          return false
        } else {
          map.set(a[i][j], 1)
        }
      }
    }
    map.clear()
  }
  map.clear()
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      if (a[i][j] !== '.') {
        if (map.has(a[i][j])) {
          return false
        } else {
          map.set(a[i][j], 1)
        }
      }
    }
    map.clear()
  }
  map.clear()
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 3 * i; k < 3 * i + 3; k++) {
        for (let p = 3 * j; p < 3 * j + 3; p++) {
          if (a[k][p] !== '.') {
            if (map.has(a[k][p])) {
              return false
            } else {
              map.set(a[k][p], 1)
            }
          }
        }
      }
      map.clear()
    }
  }
  return true
}
