/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
// 找s内长度为minSize且里面有maxLetters的子串的最大长度
var maxFreq = function(s, maxLetters, minSize, maxSize) {
  if (s.length < minSize || !s.length) {
    return false;
  }
  let hashRes = {};
  let str = "";
  let hash = {};
  let diff = 0;
  for (let i = 0; i <= s.length - minSize; i++) {
    for (let j = i; j < minSize + i; j++) {
      str += s[j];
      if (!hash[s[j]]) {
        hash[s[j]] = 1;
        diff++;
      } else {
        hash[s[j]]++;
      }
    }
    if (diff <= maxLetters) {
      if (hashRes[str]) {
        hashRes[str]++;
      } else {
        hashRes[str] = 1;
      }
    }
    str = "";
    hash = {};
    diff = 0;
  }
  let max = 0;
  for (let key in hashRes) {
    if (hashRes[key] > max) {
      max = hashRes[key];
    }
  }
  return max;
};

console.log(maxFreq("aaaaacbc", 2, 4, 6));
