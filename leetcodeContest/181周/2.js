/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
     if(count(nums[i]) === 4) {
        sum += getPreGens(nums[i]);
     }    
  }
  return sum
}

const count = (n) => {
  let sum = 1;
  for (let i = 2; i * i <= n; i++) {
      if (n % i == 0) {
          let tmp = 0;
          while (n % i == 0) {
              n = Math.floor(n / i);
              tmp++;
          }
          sum = sum * (tmp + 1);
      }
  }
  if (n > 1) sum = sum * 2;
  return sum;
}

// console.log(sumFourDivisors([21, 4, 7]))

function getPreGens(a) {
  let sum = 0;
  for (let i = 1; i <= a; ++i) {
    if (a % i == 0) {
      sum += i
    }
  }
  return sum
}
