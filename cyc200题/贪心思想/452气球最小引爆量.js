/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (points.length === 0 || points === null) {
    return 0;
  }
  points.sort((a, b) => {
    return a[1] - b[1];
  })
  let count = 1,
    pre = 0;
  for (let i = 1; i < points.length; i++) {
    // 求出不重叠区间的数量即可.
    if (points[i][0] > points[pre][1]) {
      count++;
      pre = i;
    }
  }
  return count;
};
// console.log(findMinArrowShots([[10,16], [2,8], [1,6], [7,12]]));