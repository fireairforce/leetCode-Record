/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  let str = ''
  for (let i of s) {
    if (i === ' ') {
      str += '%20'
    } else {
      str += i
    }
  }
  return str 
}
