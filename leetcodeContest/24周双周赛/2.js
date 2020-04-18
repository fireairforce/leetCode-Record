/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function (k) {
  let num = []
  num[1] = 1
  num[2] = 1
  for (let i = 3; i <= 10000; i++) {
    num[i] = num[i - 1] + num[i - 2]
    if (num[i] > k) {
      break
    }
  }
  let res = 0
    for (let i = num.length;i>=1;i--) {
      if (k === 0 ){
        break
      }
      if(num[i] > k) {
        continue
      } else if(num[i] <= k){
        k = k - num[i]
        res ++
        if(k === 0) {
          break
        }
      }
  }
  return res;
}

// console.log(findMinFibonacciNumbers(7));
// console.log(findMinFibonacciNumbers(10));
// console.log(findMinFibonacciNumbers(19));
