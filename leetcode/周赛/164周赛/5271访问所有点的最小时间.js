/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
  let sum = 0;
  for (let i = 1; i < points.length; i++) {
    let x1 = points[i - 1][0];
    let y1 = points[i - 1][1];
    let x2 = points[i][0];
    let y2 = points[i][1];
    if (Math.abs(y2 - y1) === Math.abs(x2 - x1)) {
        sum += Math.abs(y2 - y1);
    } else {
        let m = Math.abs(Math.abs(y2 - y1) - Math.abs(x2 - x1));
        let x = Math.min(Math.abs(y2 - y1) , Math.abs(x2 - x1));
        sum += (m + x);
    }
  }
  return sum;
};

// console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]));