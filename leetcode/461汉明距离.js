/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
   let sum = 0;
    while(x || y) {
       let tempX = x & 1;
       let tempY = y & 1;
       if(tempX!==tempY) {
         sum ++;
       }
       x = x >> 1;
       y = y >> 1;
   }
   return sum;
};