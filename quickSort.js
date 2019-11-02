const quickSort2 = (arr) => {
    if(arr.length <= 1) {
        return arr;
    }
    let left = [];
    let right = [];
    let privotIndex = Math.floor(arr.length >> 1);
    let privot = arr.splice(privotIndex,1)[0];
    for(let i = 0;i<arr.length;i++){
        if(arr[i] < privot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort2(left).concat([privot],quickSort2(right));
}

console.log(quickSort2([5, 1, 2, 4, 5, 45, 4, 1]));
