/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */

// s1 ="acb",n1 = 4
// acbacbacbacb
// abab
// s2 ="ab",n2 = 2
var getMaxRepetitions = function (s1, n1, s2, n2) {
  let S1 = s1.split('')
  let S2 = s2.split('')
  let index = 0
  let count = 0
  for (let i =0;i<n1;i++) {
    for (let j = 0;j<S1.length;j++) {
      if (S1[j] === S2[index]) {
        index ++
      }
      if (index === S2.length) {
        index = 0
        count ++
      }
    }
  }
  return parseInt(count / n2)
}
