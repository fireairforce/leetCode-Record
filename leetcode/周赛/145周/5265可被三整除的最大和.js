var maxSumDivThree = function(arr) {
    let arr1 = arr.filter(item => item % 3 === 1).sort((a, b) => a - b);
    let arr2 = arr.filter(item => item % 3 === 2).sort((a, b) => a - b);
    console.log(arr1)
    console.log(arr2)
    let sum = arr.reduce((pre, cur) => pre + cur, 0)
    if (sum % 3 === 0) {
        return sum;
    } else if (sum % 3 === 1) {
        sum = Math.max(sum - arr1[0], sum - arr2[0] - arr2[1] | 0);
    } else {
        sum = Math.max(sum - arr2[0], sum - arr1[0] - arr1[1] | 0);
    }
    return sum
};