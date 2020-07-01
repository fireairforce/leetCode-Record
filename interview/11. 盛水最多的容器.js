/**
 * @param {number[]} height
 * @return {number}
 */

 // 暴力解法
var maxArea = function(height) {
  let len = height.length;
  if (len < 2) {
    return 0;
  }
  let res = 0
  for (let i = 0;i<len - 1;i++) {
    for (let j = i + 1;j<len;j++) {
      res = Math.max(res, Math.min(height[j], height[i]) * (j - i))
    }
  }
  return res;
};

// 问题的核心在于水的容量等于短的一端乘以距离
// 双指针
const maxWater = (arr) => {
  let len = arr.length
  if (len < 2) {
    return 0
  }

  let left = 0,right = arr.length - 1;
  let res = 0;
  while (left < right) {
    let minHeight = Math.min(arr[left], arr[right])
    res = Math.max(res, minHeight * (right - left))
  
    // 然后短的一端算完之后在从短的一端开始往内靠
    if (arr[left] === minHeight) {
      left ++
    } else {
      right --
    }
  }
  return res;
}