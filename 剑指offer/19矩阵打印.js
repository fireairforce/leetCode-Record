function printMatrix(matrix) {
    // write code here
    let rows = matrix.length;
    let cols = matrix[0].length;
    let res = [];
    if (rows == 0 && cols == 0) {
        return res;
    }
    let left = 0,
        right = cols - 1,
        top = 0,
        bottom = rows - 1;
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
        for (let i = top + 1; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }
        if(top!=bottom){
            for (let i = right - 1; i >= left; i--) {
                res.push(matrix[bottom][i]);
            }
        }
        if(left!=right){
            for(let i = bottom-1;i>top;i--){
                res.push(matrix[i][left]);
            }
        }
        left++;
        top++;
        right--;
        bottom--;
    }
    return res;
}
module.exports = {
    printMatrix: printMatrix
};