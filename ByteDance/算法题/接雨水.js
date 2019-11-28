/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let max = 0;
  let res = 0;
  let leftMax = [];
  let rightMax = [];
  for (let i = 0; i < height.length; i++) {
    leftMax[i] = max = Math.max(max, height[i]);
  }
  for (let i = height.length - 1; i >= 0; i--) {
    rightMax[i] = maX = Math.max(max, height[i]);
  }
  for (let i = 0; i < height.length; i++) {
    res += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return res;
};
