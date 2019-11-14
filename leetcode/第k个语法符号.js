/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function(N, K) {
  return recursion(N, K - 1);
};

const recursion = (N, K) => {
  if (N === 1) {
    return 0;
  }
  let res = 0;
  let num = recursion(N - 1, Math.floor(K >> 1));
  if (K & 1) {
    if (num === 1) {
      res = 1;
    } else {
      res = 0;
    }
  } else {
    if (num === 1) {
      res = 0;
    } else {
      res = 1;
    }
  }
  return res;
};
