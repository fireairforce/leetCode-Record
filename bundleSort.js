// 冒泡排序，本质是在每组里面去进行冒泡
var bundlesort = function (arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(bundlesort([3, 4, 5, 1, 24]));
//  选择排序

let choosesort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i];
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < min) {
                let c = min;
                min = arr[j];
                arr[j] = c;
            }
        }
        arr[i] = min;
    }
    return arr;
}