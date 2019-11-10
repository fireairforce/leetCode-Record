/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
  // 行号
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = new Array();
    for (let j = 0; j < m; j++) {
      arr[i][j] = 0;
    }
  }
  let cols = indices.length;
  let sumX = {};
  let sumY = {};
  for (let i = 0; i < cols; i++) {
    let x = indices[i][0];
    let y = indices[i][1];
    sumX[x] = 0;
    sumY[y] = 0;
  }
  for (let i = 0; i < cols; i++) {
    let x = indices[i][0];
    let y = indices[i][1];
    sumX[x]++;
    sumY[y]++;
  }
  //   这个代表的是行
  for (let i in sumX) {
    let temp = parseInt(i);
    for (let j = 0; j < m; j++) {
      arr[temp][j] += sumX[i];
    }
  }
  //   列
  for (let i in sumY) {
    let temp = parseInt(i);
    for (let j = 0; j < n; j++) {
      arr[j][temp] += sumY[i];
    }
  }
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if(arr[i][j]%2!==0){
          sum ++;
      }
    }
  }
  return sum;
};

