/**
 * @param {number[]} light
 * @return {number}
 */
var numTimesAllBlue = function(light) {
  let m = 1,
    res = 0
  for (let i = 0; i < light.length; i++) {
    //   如果点亮的最远的灯，等于当前点亮灯的数目(那么就全亮了)
    m = Math.max(m, light[i])
    if (m === i + 1) {
      res++
    }
  }
  return res
}

// console.log(numTimesAllBlue([2, 1, 3, 5, 4]))
// console.log(numTimesAllBlue([3, 2, 4, 1, 5]))
// console.log(numTimesAllBlue([4, 1, 2, 3]))
