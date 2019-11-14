/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let arr = [];
 for (let i = 0; i <= rowIndex; i++) {
   arr[i] = new Array();
   for (let j = 0; j < i + 1; j++) {
     arr[i][j] = 1;
   }
 }
 for (let i = 2; i <= rowIndex; i++) {
   for (let j = 1; j < i; j++) {
     arr[i][j] = arr[i - 1][j-1] + arr[i - 1][j];
   }
 }
 return arr[rowIndex];
};

// console.log(getRow(3));