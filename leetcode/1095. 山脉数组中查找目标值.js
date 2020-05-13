/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
  let left = 0
  let right = mountainArr.length() - 1

  // 寻找山峰
  while (left < right) {
    // 取中位数，向下取整
    const mid = (left + right) / 2 | 0
    if (mountainArr.get(mid) >= mountainArr.get(mid + 1)) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  // 标记山峰所在的位置
  const peak = left
  // 在山峰左边查找，即在升序序列中查找
  const index = binarySearch(mountainArr, target, 0, peak, v => v)
  // 若存在，则直接返回下标
  if (index !== -1) {
    return index
  }
  // 否则在山峰右边查找，即在降序序列中查找
  return binarySearch(mountainArr, target, peak + 1, mountainArr.length() - 1, v => -v)

  // 二分法查找
  // 其中 fn 是用来对升序还是降序的特殊处理
  function binarySearch (list, target, l, r, fn) {
    target = fn(target)
    while (l <= r) {
      const mid = (l + r) / 2 | 0
      const cur = fn(list.get(mid))
      if (cur === target) {
        return mid
      } else if (cur < target) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
    return -1
  }
};
