/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n <= 0) {
    return false;
  }
  //   求与
  //   2的幂满足二进制最高位是1,其余为0,
  let item = n & (n - 1);
  return item === 0 ? true : false;
};

// console.log(isPowerOfTwo(8));
// console.log(isPowerOfTwo(7));
