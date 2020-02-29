var findNthDigit = function(n) {
  if (n <= 9) {
    return n
  }
  let len = 1
  let base = 9
  while (n - len * base > 0) {
    n -= base * len
    base *= 10
    len++
  }
  let idx = n % len
  if (idx === 0) {
    idx = len
  }
  let number = 1
  for (let i = 1; i < len; i++) {
    number *= 10
  }
  number += idx == len ? Math.floor(n / len) - 1 : Math.floor(n / len)
  for (let i = idx; i < len; i++) number = Math.floor(number / 10)
  return number % 10
}
// console.log(findNthDigit(16));
