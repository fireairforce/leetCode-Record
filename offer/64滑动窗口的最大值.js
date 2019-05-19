function maxInWindows(num, size) {
    // write code here
    if (size > num) {
        var arr = quickSort(num);
        return [arr[arr.length - 1]];
    }
    if (size === 0) {
        return []
    }
    var Arr = []
    for (var i = 0; i <= num.length - size; i++) {
        Arr.push(getMaxNumber(num.slice(i, i + size)))
    }
    return Arr;
}

function getMaxNumber(arr) {
    var newArr = quickSort(arr);
    return newArr[newArr.length - 1];
}

function quickSort(arr) {
    if (arr.length < 1) {
        return arr;
    }
    var left = [];
    var right = [];
    var privotIndex = Math.floor(arr.length / 2);
    var privot = arr.splice(privotIndex, 1)[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < privot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([privot], quickSort(right));
}
module.exports = {
    maxInWindows: maxInWindows
};