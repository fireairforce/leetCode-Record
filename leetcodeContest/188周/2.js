/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
  let res = []
  let a = 0
  let b = 0
  let temp = []
  let temp2 = []
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j; k < arr.length; k++) {
        temp = arr.slice(i, j)
        temp2 = arr.slice(j, k + 1)
        a = 0
        b = 0;
        for (let n = 0;n<temp.length;n++) {
          a = a ^ temp[n]
        }
        for (let m = 0;m<temp2.length;m++) {
          b = b ^ temp2[m]
        }
        if (a === b) {
          res.push([i , j ,k])
        }
      }
    }
  }
  return res.length
}
// console.log(countTriplets([2, 3, 1, 6, 7]))
