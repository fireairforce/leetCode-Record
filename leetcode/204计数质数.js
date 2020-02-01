/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let isPrime = Array(n).fill(1);
  isPrime[0] = 0;
  isPrime[1] = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      for (let j = 2 * i; j < n; j += i) {
        isPrime[j] = 0;
      }
    }
  }
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (isPrime[i]) {
      res++;
    }
  }
  return res;
};

// console.log(countPrimes(2));
