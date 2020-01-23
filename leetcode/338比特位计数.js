/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let res = Array(num + 1).fill(0);
  for (let i = 0; i <= num; i++) {
    //   res[i>>1]表示比i小一位的1的个数i&1表示i多出来的那位数的1的个数
    res[i] = res[i >> 1] + (i & 1);
  }
  return res;
};
