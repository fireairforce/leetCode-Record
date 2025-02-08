/**
 * @param {number[][]} grid
 * @return {number}
 */

//  一看就是个dfs
var maxAreaOfIsland = function(grid) {
  let ans = 0;
  let m = grid.length;
  let n = grid[0].length;
  for (let i = 0; i < m; i ++) {
    for (let j = 0; j < n; j ++) {
      ans = Math.max(ans, dfs(grid, i, j));
    }
  }
  return ans;
};


const dfs = (grid, i, j) => {
  if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1 || grid[i][j] == 0) {
    return 0;
  } 
  grid[i][j] = 0;
  let ans = 1;
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];
  for (let k = 0; k < 4; ++k) {
    let x = i + dx[k];
    let y = j + dy[k];
    ans += dfs(grid, x, y);
  }

  return ans;
}


console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ]),
);
