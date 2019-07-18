function quickSort(arr) {
    if(arr.length<=1){
        return arr;
    }
    let left = [];
    let right = [];
    let privotIndex = Math.floor(arr.length / 2);
    let privot = arr.splice(privotIndex, 1)[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < privot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([privot],quickSort(right));
}

function GetLeastNumbers_Solution(input, k) {
    // write code here
    if(k>input.length){
        return [];
    }
    let newArr = quickSort(input);
    let arr = [];
    for (let i = 0; i < k; i++) {
      arr.push(newArr[i]);
    }
    return arr;
}


// console.log(quickSort([4,2,12,4,5,65,2]));
module.exports = {
    GetLeastNumbers_Solution: GetLeastNumbers_Solution
};