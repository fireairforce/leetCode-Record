/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

var uniquePathsWithObstacles1 = function(obstacleGrid) {
  let cols = obstacleGrid.length;
  if (cols === 0) {
    return 0;
  }
  let rows = obstacleGrid[0].length;
  let sum = 0;
  const dfs = (x, y) => {
    if (x >= cols || y >= rows || x < 0 || y < 0) {
      return;
    }
    if (obstacleGrid[x][y] === 1) {
      return;
    }
    if (x === cols - 1 && y === rows - 1) {
      sum++;
    }
    dfs(x + 1, y);
    dfs(x, y + 1);
  };
  dfs(0, 0);
  return sum;
};



/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length;
  if (m === 0) {
    return 0;
  }
  let n = obstacleGrid[0].length;
  let dp = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = Array(n).fill(0);
  }
  dp[0][0] = obstacleGrid[0][0] ? 0 : 1;
  if (dp[0][0] === 0) {
    return 0;
  }
  //   对一行进行初始化
  for (let i = 1; i < n; i++) {
    if (obstacleGrid[0][i] !== 1) {
      dp[0][i] = dp[0][i - 1];
    }
  }
  //   对第一列初始化
  for (let i = 1; i < m; i++) {
    if (obstacleGrid[i][0] !== 1) {
      dp[i][0] = dp[i - 1][0];
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] !== 1) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]),
);