/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
  reservedSeats.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    }
    return a[0] - b[0]
  })
  reservedSeats.push(-1, -1)
  let hash = {}
  let arr = []
  for (let i = 0; i < reservedSeats.length; i++) {
    if (!hash[reservedSeats[i][0]]) {
      let flag1 = 0
      let flag2 = 0
      let flag3 = 0
      if (arr.length) {
        for (let j = 0; j < arr.length; j++) {
          if (arr[j] >= 2 && arr[j] <= 3) {
            flag1 = 1
          }
          if (arr[j] >= 4 && arr[j] <= 5) {
            flag1 = 1
            flag3 = 1
          }
          if (arr[j] >= 6 && arr[j] <= 7) {
            flag2 = 1
            flag3 = 1
          }
          if (arr[j] >= 8 && arr[j] <= 9) {
            flag2 = 1
          }
        }
        if (flag1 + flag2 === 1) {
          hash[reservedSeats[i - 1][0]] = 1
        } else if (flag1 + flag2 === 2 && flag3 === 0) {
          hash[reservedSeats[i - 1][0]] = 1
        } else if (flag2 + flag2 === 2) {
          hash[reservedSeats[i - 1][0]] = 0
        }
      }
      arr = []
      hash[reservedSeats[i][0]] = 2
      arr.push(reservedSeats[i][1])
    } else {
      arr.push(reservedSeats[i][1])
    }
  }
  console.log(hash)
  let sum = 0
  for (let i = 1; i <= n; i++) {
    if (hash[i] === undefined) {
      sum += 2
    } else {
      sum += hash[i]
    }
  }
  return sum
}