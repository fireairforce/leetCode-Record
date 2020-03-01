/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
  let record = [-1, -1, -1]
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      sum += Math.min(record[1], record[2]) + 1
    } else if (s[i] === 'b') {
      sum += Math.min(record[0], record[2]) + 1
    } else {
      sum += Math.min(record[0], record[1]) + 1
    }
    record[s[i].charCodeAt() - 'a'.charCodeAt()] = i
  }
  return sum;
}
