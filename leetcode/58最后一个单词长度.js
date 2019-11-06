/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (!s) {
    return s;
  }
  let str = s.split(" ").reverse();
  for (let i in str) {
    if (str[i]) {
      return str[i].length;
    }
  }
  return 0;
};

console.log(lengthOfLastWord("Hello World"));
