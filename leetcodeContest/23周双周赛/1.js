/**
 * @param {number} n
 * @return {number}
 */

const count = (n) => {
  n = (n + '').split('')
  let sum = 0
  for (let i = 0; i < n.length; i++) {
    sum += parseInt(n[i])
  }
  return sum
}
var countLargestGroup = function (n) {
  let res = {}
  for (let i = 1; i <= n; i++) {
    if(!res[count(i)]) {
      res[count(i)] = 1
    } else {
      res[count(i)] ++
    }
  }
  let arr = Object.values(res)
  arr.sort((a,b)=>b-a)
  let max = arr[0];
  let sum = 0
  for (let i =0;i<arr.length;i++) {
    if(arr[i] === max) {
      sum ++;
    }
  }
  return sum;
}

// console.log(countLargestGroup(24));