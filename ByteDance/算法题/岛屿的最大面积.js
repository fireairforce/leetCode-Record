/**
 * @param {number[][]} grid
 * @return {number}
 */

//  一看就是个dfs
var maxAreaOfIsland = function(grid) {
  const rows = grid.length;
  if (rows === 0) {
    return 0;
  }
  const cols = grid[0].length;
  let k = 2;
  let nums = new Array();
  for (let i = 0; i < rows; i++) {
    nums[i] = new Array();
    for (let j = 0; j < cols; j++) {
      nums[i][j] = 0;
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        dfs(grid, i, j, rows, cols, k++, nums);
      }
    }
  }
  let a = {};
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      a[nums[i][j]] = 0;
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      a[nums[i][j]]++;
    }
  }
  let len = 0;
  for (let i in a) {
    if (len < a[i] && i !== "0") {
      len = a[i];
    }
  }
  return len;
};

let dfs = (grid, i, j, rows, cols, k, nums) => {
  // 碰到边界条件
  if (i < 0 || i > rows - 1 || j < 0 || j > cols - 1 || grid[i][j] === 0) {
    return;
  }
  grid[i][j] = 0;
  nums[i][j] = k;
  dfs(grid, i + 1, j, rows, cols, k, nums);
  dfs(grid, i - 1, j, rows, cols, k, nums);
  dfs(grid, i, j + 1, rows, cols, k, nums);
  dfs(grid, i, j - 1, rows, cols, k, nums);
};

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
