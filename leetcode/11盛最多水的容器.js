/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const tempArea = Math.abs(j - i) * Math.min(height[i], height[j]);
      if (tempArea > max) {
        max = tempArea;
      }
    }
  }
  return max;
};

const maxArea = (height) => {
  let l = 0;
  let r = height.length - 1;
  let max = 0;
  while (l < r) {
    const tempArea = Math.abs(r - l) * Math.min(height[r], height[l]);
    if (tempArea > max) {
      max = tempArea;
    }
    // 最多的盛水面积一定是移动短的水柱产生的
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return max;
};
