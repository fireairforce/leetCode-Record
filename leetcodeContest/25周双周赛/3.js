/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkIfCanBreak = function (s1, s2) {
  let temp1 = s1.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt())
  let temp2 = s2.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt())
  let len = temp1.length - 1
  let flag1 = true
  let flag2 = true
  for (let i = 0; i <= len; i++) {
    if (temp1[i].charCodeAt() > temp2[i].charCodeAt()) {
      flag1 = false
      break;
    }
  }
  for (let i = 0; i <= len; i++) {
    if (temp2[i].charCodeAt() > temp1[i].charCodeAt()) {
      flag2 = false
      break;
    }
  }
  return flag2 || flag1
}
// console.log(checkIfCanBreak('abc', 'xya'))
// console.log(checkIfCanBreak('abe', 'acd'))
// console.log(checkIfCanBreak('leetcodee', 'interview'))
