/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
   if(A.length === 0 || B.length === 0) {
       return 0;
   }
   let dp = [];
   for(let i = 0; i < A.length; i++) {
       dp[i] = new Array();
       for(let j = 0; j < B.length; j++) {
          dp[i][j] = 0;
       }
   }
   
};