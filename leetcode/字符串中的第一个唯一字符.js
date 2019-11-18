/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = 0;
  }
  for (let i = 0; i < s.length; i++) {
    hash[s[i]]++;
  }
  for (let i in hash) {
    if (hash[i] === 1) {
      for (let j = 0; j < s.length; j++) {
        if (s[j] === i) {
          return j;
        }
      }
    }
  }
  return -1;
};
