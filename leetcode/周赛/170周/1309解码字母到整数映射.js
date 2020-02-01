/**
 * @param {string} s
 * @return {string}
 */
const freqAlphabets = (s) => {
  let temp = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      temp.push(i - 2);
    }
  }
  let map = {};
  for (let i = 1; i <= 26; i++) {
    if (i < 10) {
      map[`${i}`] = String.fromCharCode("a".charCodeAt() + i - 1);
    } else {
      map[`${i}#`] = String.fromCharCode("a".charCodeAt() + i - 1);
    }
  }
  for (let i in map) {
    map[map[i]] = i;
  }
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (temp.indexOf(i) > -1) {
      str += map[s[i] + s[i + 1] + s[i + 2]];
      i += 2;
    } else {
      str += map[s[i]];
    }
  }
  return str;
};

// console.log(freqAlphabets("abcdefghijklmnopqrstuvwxyz"));
