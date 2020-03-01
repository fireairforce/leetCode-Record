/**
 * @param {string} text
 * @return {number}
 */
var distinctEchoSubstrings = function(text) {
  let res = {};
  for (let i = 0; i < text.length; i++) {
    let last = callast(text.substr(i, text.length));
    for (let j = 0; j < last.length; j++) {
      if (
        last[j] !== -1 &&
        (j + 1) % (j - last[j]) === 0 &&
        ((j + 1) / (j - last[j])) % 2 === 0
      ) {
        res[text.substr(i, j + 1)] = 1;
      }
    }
  }
  return Object.keys(res).length;
};

const callast = (text) => {
  let ret = [-1];
  let n = text.length;
  for (let i = 1; i < n; i++) {
    let s = ret[i - 1];
    while (1) {
      if (text[s + 1] === text[i]) {
        ret.push(s + 1);
        break;
      } else {
        if (s === -1) {
          ret.push(-1);
          break;
        } else {
          s = ret[s];
        }
      }
    }
  }
  return ret;
};
