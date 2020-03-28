/**
 * @param {number[]} deck
 * @return {boolean}
 */
//  思路其实就是求相同数字数组数字的长度的与其最小长度的最大公因数不为1
const gcd = (a, b) => {
  return b === 0 ? a : gcd(b, a % b)
}
var hasGroupsSizeX = function(deck) {
  let hash = {}
  deck.sort((a, b) => a - b)
  for (let i = 0; i < deck.length; i++) {
    if (!hash[i]) {
      hash[i] = 1
    } else {
      hash[i]++
    }
  }
  let arr = Object.values(hash)
  let res = arr[0]
  arr.forEach((time) => {
    res = gcd(res, time)
  })
  return res >= 2
}
// [1,2,3,4,4,3,2,1]
// [1,1,1,2,2,2,3,3]
console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1]));
console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3]));
