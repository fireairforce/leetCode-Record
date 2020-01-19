/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function (s) {
  s = s.split(' ');
  max = -1;
  for (let i = 0; i < s.length; i++) {
    s[i] = s[i].split('');
    max = Math.max(max, s[i].length);
  }
  let res = [];
  for (let i = 0; i < max; i++) {
    res[i] = '';
  }
  for (let i = 0; i < max; i++) {
    for (let k = 0; k < s.length; k++) {
      if (i >= s[k].length) {
        res[i] += ' ';
      } else {
        res[i] += s[k][i]
      }
    }
  }
  for(let i = 0;i<res.length;i++) {
    res[i] = res[i].split('').reverse();
  }
  let flag;
  for(let i = 0;i<res.length;i++){
    flag = false;
    for(let j = 0;j<res[i].length;j++){
      if(res[i][j]!==' '){
        flag = true;
      } else if(res[i][j]===' ' && flag === false) {
        res[i][j] = '';
      }
    }
  }
  for(let i = 0;i<res.length;i++){
    res[i]= res[i].reverse().join('');
  }
  // console.log(res);
  return res;
};

// printVertically("TO BE OR NOT TO BE")