/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let sum = 0
  let len = arr.length
  for (let i = 0;i<len;i++) {
    for (let j = i;j<len;j++) {
      if (j === i) {
        sum += arr[i]
      } else if ((j - i) % 2 === 0){
        for (let k = i;k<=j;k++) {
          sum += arr[k]
        }
      }
    }
  }
  return sum;
}
// console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
