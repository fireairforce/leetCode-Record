/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
  if (!s) {
    return "";
  }
  if (s.length === 1) {
    return 1;
  }
  if (s.length >= 2 && judge(s)) return 1;
  if (s.length >= 2 && !judge(s)) return 2;
};

const judge = (str) => {
  let l = 0,
    r = str.length - 1;
  while (l < r) {
    if (str[l] !== str[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};

console.log(removePalindromeSub(""));
