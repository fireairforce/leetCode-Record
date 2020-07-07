/**
 * @param {number[]} height
 * @return {number}
 */
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