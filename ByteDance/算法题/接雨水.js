/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let max = 0;
  let volumn = 0;
  const rightMax = [];
  const leftMax = [];
  for (let i = 0; i < height.length; i++) {
    leftMax[i] = max = Math.max(max, height[i]);
  }
  max = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    rightMax[i] = max = Math.max(max, height[i]);
  }
  for (let i = 0; i < height.length; i++) {
    volumn = volumn + Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return volumn;
};
