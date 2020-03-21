/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
  if (n === 0) {
    return 0
  }
  let count = n * 2
  let map = []
  while (reservedSeats.length > 0) {
    const [x, y] = reservedSeats.pop()
    if (y === 1 || y === 10) {
      continue
    } else {
      if (map[x] === undefined) {
        if (y === 2 || y === 3) {
          // 中，右
          map[x] = 6
        } else if (y === 8 || y === 9) {
          // 中，左
          map[x] = 5
        } else if (y === 4 || y === 5) {
          // 右
          map[x] = 3
        } else if (y === 6 || y === 7) {
          // 左
          map[x] = 4
        }
        count--
      } else if (map[x] === 2) {
        //  中
        if (y === 4 || y === 5 || y === 6 || y === 7) {
          map[x] = 0
          count--
        }
      } else if (map[x] === 3) {
        // 右
        if (y === 6 || y === 7 || y === 8 || y === 9) {
          map[x] = 0
          count--
        }
      } else if (map[x] === 4) {
        // 左
        if (y === 2 || y === 3 || y === 4 || y === 5) {
          map[x] = 0
          count--
        }
      } else if (map[x] === 5) {
        // 中，左
        if (y === 2 || y === 3) {
          map[x] = 2
        } else if (y === 6 || y === 7) {
          map[x] = 4
        } else if (y === 4 || y === 5) {
          map[x] = 0
          count--
        }
      } else if (map[x] === 6) {
        // 中，右
        if (y === 4 || y === 5) {
          map[x] = 3
        } else if (y === 6 || y === 7) {
          map[x] = 0
          count--
        } else if (y === 8 || y === 9) {
          map[x] = 2
        }
      }
    }
  }
  return count
}
