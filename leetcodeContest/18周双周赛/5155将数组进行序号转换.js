/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let tempArr = JSON.parse(JSON.stringify(arr));
    let hash = {};
    let index = 1;
    arr.sort((a,b)=>a-b)
    for(let i = 0;i<arr.length;i++) {
        if(!hash[arr[i]]) {
          hash[arr[i]] = index;
          index ++;
        }
    }
    let res = [];
    for(let i = 0;i<tempArr.length;i++) {
        res.push(hash[tempArr[i]]);
    }
    return res;
};
// console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]));