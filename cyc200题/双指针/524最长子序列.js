/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function (s, d) {
  let tempArr = [];
  for (let i = 0; i < d.length; i++) {
    if (panduan(s, d[i])) {
      tempArr.push(d[i]);
    }
  }
  if (tempArr.length === 0) {
    return '';
  }
  tempArr.sort((a, b) => {
    return b.length - a.length
  });
  let tempArr2 = [tempArr[0]];
  let maxLength = tempArr[0].length;
  for (let i = 1; i < tempArr.length; i++) {
    if (tempArr[i].length === maxLength) {
      tempArr2.push(tempArr[i]);
    }
  }
  tempArr2.sort();
  return tempArr2[0];
};

let panduan = (s1, s2) => {
  let i = 0;
  let j = 0;
  while (i < s1.length && j < s2.length) {
    if (s1[i] === s2[j]) {
      j++;
    }
    i++;
  }
  return j === s2.length;
}
console.log(findLongestWord("bab",
  ["ba", "ab", "a", "b"]));