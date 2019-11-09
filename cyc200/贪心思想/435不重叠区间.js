/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  // 无重叠区间
  if (intervals.length === 0 || intervals === null) {
    return 0;
  }
  // 按照区间的后一位进行排序
  intervals.sort((a, b) => {
      return a[1] - b[1];
  })
  // res用来存最后能保存的区间的不重叠的区间，计算出能存下来的最大的值
  let res = 1;
  let pre = 0;
  for (let i = 1; i < intervals.length; i++) {
    // 如果两个区间重叠了选择结尾比较小的
    if (intervals[i][0] >= intervals[pre][1]) {
      res++;
      pre=i;
    }
  }
  return intervals.length - res;
};
// console.log(eraseOverlapIntervals([
//   [1,2], [1,2], [1,2]
// ]));