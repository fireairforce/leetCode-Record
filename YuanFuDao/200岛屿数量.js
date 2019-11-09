/**
 * @param {character[][]} grid
 * @return {number}
 */

//  dfs板子题目，使用一个visited数组来进行一个值的记录
var numIslands = function (grid) {
    let res = 0;
    const rows = grid.length;
    if (rows === 0) {
        return 0;
    }
    const cols = grid[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // 如果遇到小岛了，对小岛周围来一波搜索，全标记上，然后把res++
            if (grid[i][j] === '1') {
                dfs(grid, i, j, rows, cols);
                res++;
            }
        }
    }
    return res;
};

let dfs = (grid, i, j, rows, cols) => {
    // dfs的终点条件
    if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || grid[i][j] === '0') {
        return;
    }
    // 对已经走过的点进行一个标记
    grid[i][j] = '0';
    // 然后往四个方向遍历一波
    dfs(grid, i + 1, j, rows, cols);
    dfs(grid, i - 1, j, rows, cols);
    dfs(grid, i, j + 1, rows, cols);
    dfs(grid, i, j - 1, rows, cols);
}
