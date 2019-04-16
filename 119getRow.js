/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let arr = [],flag = 1;
    arr.push(flag);
    for (let i = 0; i < rowIndex; i++) {
         flag = flag * (rowIndex-i)/(i+1);
         arr.push(flag);
    }
    return arr;
};

console.log(getRow(0))