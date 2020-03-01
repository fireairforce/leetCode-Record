/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  let t1 = s
    .slice(0, n)
    .split('')
    .reverse()
    .join('')
  let t2 = s
    .slice(n)
    .split('')
    .reverse()
    .join('')
  return (t1 + t2)
    .split('')
    .reverse()
    .join('')
}
// console.log(reverseLeftWords('abcdefg', 2))
// console.log(reverseLeftWords('lrloseumgh', 6))
