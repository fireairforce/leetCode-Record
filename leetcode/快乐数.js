/**
 * @param {number} n
 * @return {boolean}
 */
const solve = (n) => {
  let res = []
  while (n > 0) {
    let m = n % 10
    n = Math.floor(n / 10)
    res.push(m)
  }
  return res
}

var isHappy = function (n) {
  let map = new Map()
  while (n !== 1) {
    let sum = 0
    let res = solve(n)
    for (let i = 0; i < res.length; i++) {
      sum += res[i] * res[i]
    }
    if (map.has(sum)) {
      return false
    } else {
      map.set(sum, 1)
      n = sum;
    }
  }
  return true;
}

// console.log(isHappy(19));