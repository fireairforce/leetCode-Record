/**
 * @param {number[]} arr
 * @return {number[]}
 */
// var sortByBits = function(arr) {
//   var hammingWeight = function(n) {
//     let sum = 0
//     for (let i = 0; i < 32; i++) {
//       sum += n & 1
//       n = n >> 1
//     }
//     return sum
//   }
//   return arr.sort((a, b) => {
//     if (hammingWeight(a) === hammingWeight(b)) {
//       return parseInt(a) - parseInt(b)
//     }
//     return hammingWeight(a) - hammingWeight(b)
//   })
// }

let arr = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]
let hash = {}
for (let i of arr) {
  hash[i] = 1
}

res = Object.keys(hash).sort((a, b) => hash[a] - hash[b])
console.log(res)
