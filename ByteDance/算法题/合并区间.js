/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// 合并区间这个题目其实就类似于一个贪心题目
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length - 1; i++) {
    const cur = intervals[i];
    const next = intervals[i + 1];
    // 如果满足区间合并的条件
    if (cmp(cur, next)) {
      intervals[i] = undefined;
      //   区间合并
      intervals[i + 1] = mergeTwo(cur, next);
    }
  }
  return intervals.filter((item) => item !== undefined);
};

// 合并区间的函数
const mergeTwo = (a, b) => {
  return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
};

const cmp = (a, b) => {
  //   不满足的区间合并条件
  if (a[0] > b[1] || a[1] < b[0]) {
    return false;
  }
  return true;
};
