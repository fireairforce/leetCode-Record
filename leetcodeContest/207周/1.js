/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
  let newText = text.split(' ').filter(item => item !== '')
  text = text.split('')
  let len = text.length;
  let cntText = newText.length;
  let cnt = 0
  for (let i = 0;i<len;i++) {
    if (text[i]===' '){
      cnt ++;
    }
  }
  let a1 =Math.floor(cnt / (cntText - 1))
  let a2 = cnt % (cntText - 1);
  let res = ''
  if (newText.length === 1) {
    for (let i = 0;i<cnt;i++) {
      newText[0] += ' ';
    }
    return newText[0];
  }
  for (let i = 0;i<newText.length;i++) {
    res += newText[i]
    if (i !== newText.length - 1) {
      for (let j = 0;j<a1;j++) {
        res += ' ';
      }
    }
  }
  for (let i = 0;i<a2;i++) {
    res += ' '
  }
  return res;
};


// console.log(reorderSpaces("  walks  udp package   into  bar a"));
// console.log(reorderSpaces("  this   is  a sentence "));
