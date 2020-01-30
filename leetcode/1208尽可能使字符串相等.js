/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    if (!s) {
      return 0;
    }
    let count = 0;
    let max = 0;
    for (let i = 0, j = 0; i < s.length; i++) {
      count += Math.abs(s[i].charCodeAt() - t[i].charCodeAt());
      while (count > maxCost) {
        count -= Math.abs(s[j].charCodeAt() - t[j].charCodeAt());
        j++;
      }
      max = Math.max(max, i - j + 1);
    }
    return max;
  };
  