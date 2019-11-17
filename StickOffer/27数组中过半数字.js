function MoreThanHalfNum_Solution(numbers) {
    // write code here
    let o = {};
    for (let i = 0; i < numbers.length; i++) {
        if (!o[numbers[i]]) {
            o[numbers[i]] = 1;
        } else {
            o[numbers[i]]++;
        }
    }
    for(i in o){
       if(o[i]>Math.floor(numbers.length/2)){
           return i;
       }
    }
    return 0;
}

function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let left = [];
    let right = [];
    let privotIndex = Math.floor(arr.lenght / 2);
    let privot = arr.splice(privotIndex, 1)[0];
    for (let i = 0; i < arr.length; i++) {
        if (privot < arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([privot], quickSort(right));
}
module.exports = {
    MoreThanHalfNum_Solution: MoreThanHalfNum_Solution
};