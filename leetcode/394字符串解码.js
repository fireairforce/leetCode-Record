/**
 * @param {string} s
 * @return {string}
 */
// s = "3[a]2[bc]", 返回 "aaabcbc".
// s = "3[a2[c]]", 返回 "accaccacc".
// s = "2[abc] 3[cd] ef", 返回 "abcabccdcdcdef".

var decodeString = function (s) {
  if (!s) {
    return s;
  }
  let stack_multi = [],
    stack_res = [],
    res = '';
  let multi = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '[') {
      stack_multi.push(multi);
      stack_res.push(res.toString());
      multi = 0;
      res = '';
    } else if (s[i] === ']') {
      let temp = '';
      let cur_multi = stack_multi.pop();
      for (let i = 0; i < cur_multi; i++) {
        temp += res;
      }
      res = stack_res.pop() + temp;
    } else if ('0' <= s[i] && s[i] <= 9) {
      multi = multi * 10 + parseInt(s[i]);
    } else {
      res += s[i];
    }
  }
  return res;
};

decodeString('2[abc]3[cd]ef');