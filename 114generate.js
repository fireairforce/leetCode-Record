/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let arr = []
    for (let i = 0; i < numRows; i++) {
        let cols = [];  // 存储每一列里面的值
        for (let j = 0; j <= i; j++) {
              if(j===0||j===i){
                  cols.push(1);
              }else {
                  cols.push(arr[i-1][j-1] + arr[i-1][j])
              }
            }
        arr.push([].concat(cols)); // 把每一列的值都存起来
        cols.length = 0; // clear array
    }
    return arr;
};

// console.log(generate(5))
// console.log(generate(5))
