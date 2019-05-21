function FindNumbersWithSum(array, sum) {
    // write code here
    if (array.length < 2) {
        return [];
    }
    let min = 9999999;
    let res = [];
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(sum - array[i]) > -1) {
            if ((array[i] * (sum - array[i]))<min) {
                min = array[i] * (sum - array[i]);
                if (res.length !== 0) {
                    res.pop();
                    res.pop();
                }
                res.push(array[i], sum - array[i]);
            }
        }
    }
    return res;
}
module.exports = {
    FindNumbersWithSum: FindNumbersWithSum
};