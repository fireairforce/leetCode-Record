function movingCount(threshold, rows, cols) {
    // write code here
    var visited = [];
    for (var i = 0; i < rows; i++) {
        visited[i] = [];
        for (var j = 0; j < cols; j++) {
            visited[i][j] = 0;
        }
    }
    return movingCountSum(threshold, rows, cols, 0, 0, visited);
}

function movingCountSum(threshold, rows, cols, m, n, visited) {
    var count = 0;
    if (m < rows && m >= 0 && n < cols && n >= 0 && !visited[m][n] && getSum(m, n) <= threshold) {
        visited[m][n] = 1;
        count = 1 + movingCountSum(threshold, rows, cols, m + 1, n, visited) + movingCountSum(threshold, rows, cols, m - 1, n, visited) + movingCountSum(threshold, rows, cols, m, n - 1, visited) + movingCountSum(threshold, rows, cols, m, n + 1, visited)
    }
    return count;
}

function getSum(m, n) {
    var str = [].concat(m, n).join('');
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }
    return sum;
}
module.exports = {
    movingCount: movingCount
};