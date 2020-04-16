/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  //    按照第一个元素从小到大排序
  intervals.sort((a, b) => a[0] - b[0])
  for (let i = 0; i < intervals.length - 1; i++) {
    let cur = intervals[i]
    let next = intervals[i + 1]
    // 满足区间合并的条件
    if (!(cur[1] < next[0]) || cur[0] > next[1]) {
      intervals[i] = undefined
      intervals[i + 1] = [Math.min(cur[0], next[0]), Math.max(cur[1], next[1])]
    }
  }
  return intervals.filter((item) => item !== undefined)
}

merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
])
