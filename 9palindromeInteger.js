// 回文数
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
       return false;
   } else {
       let n = x;
       let m = 0;
       while (n) {
           m = m * 10;
           m = parseInt(m + n % 10);
           n =parseInt(n/10);
       }     
       return m === x;
   }
};