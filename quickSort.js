function quickSort(arr) {
    if(arr.length<=1) {
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
    return quickSort(left).concat([privot], quickSort(right));
}
// quickSort([1, 2, 3, 4, 1])