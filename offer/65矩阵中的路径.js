function hasPath(matrix, rows, cols, path) {
    // write code here
    if (path.length <= 0) {
        return true;
    }
    var visited = [];
    for (var i = 0; i < rows; i++) {
        visited[i] = [];
        for (var j = 0; j < cols; j++) {
            visited[i][j] = 0;
        }
    }
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (hasPathCore(matrix, rows, cols, path, i, j, 0, visited)) {
                return true;
            }
        }
    }
    return false;
}

function hasPathCore(matrix, rows, cols, path, m, n, pathIndex, visited) {
    var hasPath = false;
    if (m < rows && m >= 0 && n < cols && n >= 0 && !visited[m][n]) {
        if (matrix[m * cols + n] === path[pathIndex]) {
            visited[m][n] = true;
            if (pathIndex === path.length - 1) {
                hasPath = true;
            } else {
                hasPath = hasPathCore(matrix, rows, cols, path, m - 1, n, pathIndex + 1, visited) || hasPathCore(matrix, rows, cols, path, m + 1, n, pathIndex + 1, visited) || hasPathCore(matrix, rows, cols, path, m, n + 1, pathIndex + 1, visited) || hasPathCore(matrix, rows, cols, path, m, n - 1, pathIndex + 1, visited);
                if (!hasPath) {
                    visited[m][n] = false;
                }
            }
        }
    }
    return hasPath;
}
module.exports = {
    hasPath: hasPath
};
// hasPath("ABCESFCSADEE", 3, 4, "ABCCED")