/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let re = new RegExp(p);
  return re.test(p);
};
console.log(isMatch('a','aa'));
