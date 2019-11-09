/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let hasS = {};
  s = s.split("");
  t = t.split("");
  if(s.length !==t.length){
      return false;
  }
  for (let i = 0; i < s.length; i++) {
    hasS[s[i]] = 0;
  }
  for (let i = 0; i < s.length; i++) {
    hasS[s[i]]++;
  }
  for (let i = 0; i < t.length; i++) {
    if(!hasS[t[i]]){
        return false;
    } else {
        hasS[t[i]] --;
    }
  }
  return true;
};
