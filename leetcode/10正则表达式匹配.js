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
  //   递归的边界条件(这里把.这种情况处理掉)
  let first_match = s.length && (s[0] === p[0] || p[0] === ".");
  //   处理一下*这种情况，要么不匹配，要么往后面继续递归
  if (p.length >= 2 && p[1] === "*") {
    return isMatch(s, p.slice(2)) || (first_match && isMatch(s.slice(1), p));
  } else return first_match && isMatch(s.slice(1), p.slice(1));
};

// console.log(isMatch("aa", "a"));
