/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  let result = s.match(/\s*[+-]?((\d+(\.\d*)?)|\.\d+)([e][+-]?\d+)?\s*/g)
  return s !== '.' && result ? result[0] === s : false
}
