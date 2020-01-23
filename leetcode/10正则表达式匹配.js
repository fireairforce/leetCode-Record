/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// 递归写法
var isMatch = function(s, p) {
  if (!p.length) {
    return !s.length;
  }
  let first_match = s.length && (s[0] === p[0] || p[0] === ".");
  if (p.length >= 2 && p[1] === "*") {
    return isMatch(s, p.slice(2)) || (first_match && isMatch(s.slice(1), p));
  } else return first_match && isMatch(s.slice(1), p.slice(1));
};

// console.log(isMatch("aa", "a"));
