/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  let count = 0
  let map = new Map()
  for (let i = 0;i<A.length;i++) {
      for (let j = 0;j<B.length;j++) {
          let sum = A[i] + B[j]
          map.set(sum, map.get(sum) ? map.get(sum) + 1 : 1)
      }
  }
 for (let item1 of C) {
     for (let item2 of D) {
         let sum = item1 + item2;
         if (map.has(-sum)) {
           count += map.get(-sum)
         }
     } 
 }
  return count
};