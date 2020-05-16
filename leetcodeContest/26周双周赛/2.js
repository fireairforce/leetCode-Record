/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b)
  }
  let res = []
  for (let i = 1; i <= n - 1; i++) {
    for (let j = i; j <= n; j++) {
      if (gcd(i,j) ===1 && i !==j) {
        res.push(`${i}/${j}`)
      }
    }
  }
  return res
}

// console.log(simplifiedFractions(2));
// console.log(simplifiedFractions(3));
// console.log(simplifiedFractions(4));
// console.log(simplifiedFractions(1));






