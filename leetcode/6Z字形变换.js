/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

//  https://leetcode-cn.com/problems/zigzag-conversion/solution/zzi-xing-bian-huan-by-jyd/

// 解法大概是来回走z字形把每一行的字符存起来
var convert = function(s, numRows) {
  if (numRows < 2) {
    return s;
  }
  let flag = -1,
    k = 0;
  let rows = Array(numRows).fill("");
  for (let i = 0; i < s.length; i++) {
    rows[k] += s[i];
    if (k === 0 || k === numRows - 1) {
      flag = -flag;
    }
    k += flag;
  }
  let res = '';
  for(let i= 0;i<rows.length;i++){
      res += rows[i];
  }
  return res;
};

// console.log(convert("leetcod",3));
