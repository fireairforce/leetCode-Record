/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  if (triangle === null || triangle.length === 0) {
    return 0;
  }
  if (triangle.length === 1) {
    triangle[0].sort((a, b) => a - b);
    return triangle[0][0];
  }
  let rows = triangle.length;
  let dp = [];
  for (let i = 0; i < rows; i++) {
    dp[i] = new Array();
    for (let j = 0; j < triangle[i].length; j++) {
      dp[i][j] = 0;
    }
  }
  //   console.log(dp);
  for (let i = rows - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (i === rows - 1) {
        dp[i][j] = triangle[i][j];
      } else {
        //   在这里dp下就可以了
        dp[i][j] = triangle[i][j] + Math.min(dp[i + 1][j], dp[i + 1][j + 1]);
      }
    }
  }
  //   console.log(dp);
  return dp[0][0];
};

// minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);
