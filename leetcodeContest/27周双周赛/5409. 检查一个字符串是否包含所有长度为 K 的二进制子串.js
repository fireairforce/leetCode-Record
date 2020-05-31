/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
// 全排列 排出所有的 k 的组合
var hasAllCodes = function (s, k) {
  let map = new Map()
  for (let i = 0; i < s.length - k + 1; i++) {
    map.set(s.slice(i, i + k), 1)
  }
  return map.size === Math.pow(2, k)
}

console.log(hasAllCodes('00110', 2))
