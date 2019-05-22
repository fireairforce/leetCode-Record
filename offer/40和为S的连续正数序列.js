function FindContinuousSequence(sum) {
    // write code here
    let low = 1,
        high = 2,
        array = [];
    while (high > low) {
        let cur = (high + low) * (high - low + 1) / 2;
        if (cur < sum) {
            high++;
        }
        if (cur === sum) {
            let arr = [];
            for (let i = low; i <= high; i++) {
                arr.push(i);
            }
            array.push(arr);
            low++;
        }
        if (cur > sum) {
            low++;
        }
    }
    return array;
}
// console.log(FindContinuousSequence(5));
module.exports = {
    FindContinuousSequence: FindContinuousSequence
};