/**
 * @param {string} s
 * @return {boolean}
 */

// 用来判断小写字母和数字的
const isValid = (c) => {
  const charCode = c.charCodeAt(0);
  const isDigit =
    charCode >= "0".charCodeAt(0) && charCode <= "9".charCodeAt(0);
  const isChar = charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0);
  return isDigit || isChar;
};

var isPalindrome = function(s) {
  s = s.toLowerCase();
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (!isValid(s[l])) {
      l++;
      continue;
    }
    if (!isValid(s[r])) {
      r--;
      continue;
    }
    if (s[l] === s[r]) {
      l++;
      r--;
    } else {
      break;
    }
  }
  return r <= l;
};
