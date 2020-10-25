/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
  let m = heights.length;
  let n = heights[0].length;
  let queue = []
  let visited = new Map();
  let min = Number.MAX_SAFE_INTEGER;
  let random = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  queue.push([0, 0]);
  visited.set(`0-0`, 1);
  let f = [];
  for (let i = 0 ;i<m;i++) {
    f[i] = [];
    for (let j = 0;j<n;j++) {
      f[i][j] = 0;
    }
  }
  while(queue.length !== 0) {
    let sz = queue.length;
    for (let i = 0;i<sz;i++) {
      let item = queue.shift();
      for (let k = 0;k<4;k++) {
        let kx = item[0] + random[k][0];
        let ky = item[1] + random[k][1];
        if (kx < 0 || kx >= m || ky < 0 || ky >= n) {
          continue;
        }
        if (!visited.has(`${kx}-${ky}`)) {
          f[kx][ky] = Math.min(f[item[0], item[1]] ? f[item[0], item[1]] : 0, Math.abs(heights[kx][ky] - heights[item[0]][item[1]]))
          visited.set(`${kx}-${ky}`, 1);
          queue.push([kx, ky]);
        }
      }
    }
  }
  return f[m-1][n-1];
};

console.log(minimumEffortPath([[1, 2, 2], [3, 8, 2], [5, 3, 5]]));
