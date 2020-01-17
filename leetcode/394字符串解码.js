/**
 * @param {string} s
 * @return {string}
 */
// s = "3[a]2[bc]", 返回 "aaabcbc".
// s = "3[a2[c]]", 返回 "accaccacc".
// s = "2[abc] 3[cd] ef", 返回 "abcabccdcdcdef".


// 按照栈的思路去写，这题就比较好出了，有括号的地方都用栈
var decodeString = function (s) {
  if (!s) {
    return s;
  }
  let res = '';
  let stackRes = []
  let stackNum = [];
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if ('0' <= s[i] && s[i] <= '9') {
      num = num * 10 + parseInt(s[i]);
    } else if (s[i] === '[') {
      stackRes.push(res);
      stackNum.push(num);
      num = 0;
      res = '';
    } else if (s[i] === ']') {
      let temp = '';
      let tempNum = stackNum.pop();
      for (let i = 0; i < tempNum; i++) {
        temp += res;
      }
      res = stackRes.pop() + temp;
    } else {
      res += s[i];
    }
  }
  return res;
};

decodeString('2[abc]3[cd]ef');