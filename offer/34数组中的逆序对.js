function InversePairs(data) {
    // write code here
    let copy = data.slice();
    // console.log(copy);
    return mergeInverseCount(data, copy, 0, data.length - 1) % 1000000007;
}

function mergeInverseCount(arr, copy, begin, end) {
    if (begin === end) {
        return 0;
    }
    let mid = Math.floor((begin+end)/2);
    let left = mergeInverseCount(arr, copy, begin, mid);
    let right = mergeInverseCount(arr, copy, mid + 1, end);
    let num = 0,
        k = end,
        i = mid,
        j = end;
    while (i >= end && j >= mid + 1) {
        if (arr[i] <= arr[j]) {
            copy[k--] = arr[j--];
        } else {
            num += j - mid;
            copy[k--] = arr[i--];
        }
    }
    while (i >= begin) copy[k--] = arr[i--];
    while (j >= mid + 1) copy[k--] = arr[j--];
    for (let s = begin; s <= end; s++) {
        arr[s] = copy[s];
    }
    return num + left + right;
}


module.exports = {
    InversePairs: InversePairs
};