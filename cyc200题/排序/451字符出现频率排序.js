/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  s = [...s];
  let count = {};
  for (let i = 0; i < s.length; i++) {
    count[s[i]] = 0;
  }
  for (let i = 0; i < s.length; i++) {
    count[s[i]]++;
  }
  let arr = [];
  Object.keys(count).forEach(i => {
    arr.push({
      str: i,
      id: count[i]
    });
  })
  arr.sort((a, b) => b.id - a.id);
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].id; j++) {
      str += arr[i].str;
    }
  }
  return str;
};

// frequencySort('tree')