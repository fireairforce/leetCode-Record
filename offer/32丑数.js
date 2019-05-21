function GetUglyNumber_Solution(index) {
    // write code here
    if (index <= 0) {
        return 0;
    }
    let uglyNumbers = [];
    uglyNumbers[0] = 1;
    let p2 = 0,
        p3 = 0,
        p5 = 0;
    let nextUglyIndex = 1;
    while (nextUglyIndex < index) {
        let min = Math.min(uglyNumbers[p2] * 2, uglyNumbers[p3] * 3, uglyNumbers[p5] * 5);
        uglyNumbers[nextUglyIndex] = min;
        while (uglyNumbers[p2] * 2 <= uglyNumbers[nextUglyIndex]) {
            p2++;
        }
        while (uglyNumbers[p3] * 3 <= uglyNumbers[nextUglyIndex]) {
            p3++;
        }
        while (uglyNumbers[p5] * 5 <= uglyNumbers[nextUglyIndex]) {
            p5++;
        }
        nextUglyIndex++;
    }
    return uglyNumbers[index - 1];
}

module.exports = {
    GetUglyNumber_Solution: GetUglyNumber_Solution
};