/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let hasS = {};
  let hasT = {};
  for (let i = 0; i < s.length; i++) {
    hasS[s[i]] = 0;
    hasT[t[i]] = 0;
  }
  for (let i = 0; i < t.length; i++) {
    hasS[s[i]] = 0;
    hasT[t[i]] = 0;
  }
  for (let i = 0; i < s.length; i++) {
    hasS[s[i]]++;
  }
  for (let i = 0; i < t.length; i++) {
    hasT[t[i]]++;
  }
  return isEqualObejct(hasS, hasT);
};

isEqualObejct = (obj1, obj2) => {
  for (let i in obj1) {
    if (obj1[i] !== obj2[i]) {
      return false;
    }
  }
  return true;
};

// console.log(isAnagram("rat", "car"));
