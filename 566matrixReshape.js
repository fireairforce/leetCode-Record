/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
    var arr = [],
        arr3 = [];
    nums.forEach(items=>{
        arr.push(...items);
    })
    if (r * c === arr.length) {
       for(let i=0;i<r;i++){
          var arr2 = [];
           for(let j = 0;j<c;j++){
            arr2.push(arr[0]);
            arr.shift(); 
           }
        arr3.push(arr2);
       }
       return arr3;
    } else return nums;
};
console.log(matrixReshape([
    [1, 2],
    [3, 4]
], 1, 4));
