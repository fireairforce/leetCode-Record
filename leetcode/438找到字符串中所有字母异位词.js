/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let hash1 = {};
  let hash2 = {};
  for (let i = 0; i < p.length; i++) {
    if (!hash1[p[i]]) {
      hash1[p[i]] = 1;
    } else {
      hash1[p[i]]++;
    }
  }
  let res = [];
  let flag = false;
  for (let i = 0; i < s.length; i++) {
    if (!hash2[s[i]]) {
      hash2[s[i]] = 1;
    } else {
      hash2[s[i]]++;
    }
    if (i + 1 >= p.length) {
      flag = true;
      if (equalObj(hash1, hash2)) {
        res.push(i + 1 - p.length);
      }
    }
    if (flag && hash2[s[i + 1 - p.length]] === 1) {
      delete hash2[s[i + 1 - p.length]];
    } else if (flag && hash2[s[i + 1 - p.length]] > 1) {
      hash2[s[i + 1 - p.length]]--;
    }
  }
//   console.log(res);
  return res;
};

const equalObj = (obj1, obj2) => {
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

// findAnagrams("cbaebabacd", "abc");
