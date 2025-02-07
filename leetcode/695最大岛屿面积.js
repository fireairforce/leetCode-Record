/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let ans = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            ans = Math.max(ans, dfs(grid, i, j));
        }
    }
    return ans;
};

const dfs = (grid, i, j) => {
    if (i < 0 || j < 0 || i == grid.length || j == grid[0].length || grid[i][j] !== 1) {
        return 0;
    }
    let ans = 1;
    grid[i][j] = 0;

    let dx = [-1, 0, 1, 0];
    let dy = [0, -1, 0, 1];
    for (let x = 0; x < 4; x++){
        ans += dfs(grid, i + dx[x], j + dy[x]);
    }

    return ans;
}