/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = []
  let right = []
  let max = 0
  for (let i = 0; i < height.length; i++) {
    if (max < height[i]) {
      max = height[i]
    }
    left[i] = max
  }
  max = 0
  for (let i = height.length - 1; i >= 0; i--) {
    if (max < height[i]) {
      max = height[i]
    }
    right[i] = max
  }
  let res = 0
  for (let i = 0; i < height.length; i++) {
    res += Math.min(left[i], right[i]) - height[i]
  }
  return res
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));