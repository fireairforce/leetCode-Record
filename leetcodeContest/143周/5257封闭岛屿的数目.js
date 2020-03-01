/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
  let rows = grid.length;
  if (rows <= 0) {
    return 0;
  }
  let cols = grid[0].length;
  if(cols<3||rows<3){
    return 0;
  }
  let res = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // 如果遇见陆地
      if (grid[i][j] === 0) {
        dfs(grid, i, j, rows, cols);
        res++;
      }
    }
  }
  return res;
};

let dfs = (grid, i, j, rows, cols) => {
  // dfs的终点条件
  if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || grid[i][j] === 1) {
    return;
  }
  // 对已经走过的点进行一个标记
  grid[i][j] = 1;
  // 然后往八个方向遍历一波
  dfs(grid, i + 1, j, rows, cols);
  dfs(grid, i - 1, j, rows, cols);
  dfs(grid, i, j + 1, rows, cols);
  dfs(grid, i, j - 1, rows, cols);
  dfs(grid, i + 1, j + 1, rows, cols);
  dfs(grid, i + 1, j - 1, rows, cols);
  dfs(grid, i - 1, j + 1, rows, cols);
  dfs(grid, i - 1, j - 1, rows, cols);
};

// [[0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0],
//  [1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0]]